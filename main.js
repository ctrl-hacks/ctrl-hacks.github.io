import * as THREE from "three";
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { gsap } from "gsap";

import { addStars } from "./stars";

// Constants
const START_STR = "CTRL HACKS '23";
const LETTER_OFFSET = 9, START_OFFSET = 70;

const DRAW_ANIM_DURATION = 1.5;
const SCALE_ANIM_DURATION = 1.5;


function main() {
	const canvas = document.querySelector("#c");
	const renderer = new THREE.WebGLRenderer({ canvas: canvas });

	const camera = new THREE.PerspectiveCamera(40, 2, 0.1, 1000);
    camera.position.set(0, 20, 120);

	const scene = new THREE.Scene();
	scene.background = 0x000000;
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.target = new THREE.Vector3(0, 10, 0);
    controls.autoRotate = true;
    controls.autoRotateSpeed = -0.5;
    controls.enableDamping = true;
    
    controls.enableZoom = false;
    controls.enablePan = false;

    const objects = [];

    addStars(100, {x: 100, y: 100, z: 100}, scene);

    START_STR.split('').forEach((letter, index) => {
        const loader = new FontLoader();
        loader.load('fonts/Space-Grotesk-Bold.json', (font) => {
            const textGeom = new TextGeometry(letter, {
                font: font,
                size: 10,
                height: 2,
                curveSegments: 4,
                bevelEnabled: false,
            });

            {
                // using edges just to get rid of the lines triangles
                const geometry = new THREE.EdgesGeometry(textGeom);
                const numVertices = geometry.getAttribute("position").count;
                const counts = new Float32Array(numVertices);
                // every 2 points is one line segment so we want the numbers to go
                // 0, 1, 1, 2, 2, 3, 3, 4, 4, 5 etc
                const numSegments = numVertices / 2;
                for (let seg = 0; seg < numSegments; ++seg) {
                    const off = seg * 2;
                    counts[off + 0] = seg;
                    counts[off + 1] = seg + 1;
                }
                const itemSize = 1;
                const normalized = false;
                const colorAttrib = new THREE.BufferAttribute(
                    counts,
                    itemSize,
                    normalized
                );
                geometry.setAttribute("count", colorAttrib);

                const timeLineShader = {
                    uniforms: {
                        color: { value: new THREE.Color("white") },
                        time: { value: 0 },
                    },
                    vertexShader: `
                    attribute float count;
                    varying float vCount;
                    void main() {
                    vCount = count;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
                    }
                `,
                    fragmentShader: `
                    #include <common>
            
                    varying float vCount;
                    uniform vec3 color;
                    uniform float time;
            
                    void main() {
                    if (vCount > time) {
                        discard;
                    }
                    gl_FragColor = vec4(color, 1);
                    }
                `,
                };

                const material = new THREE.ShaderMaterial(timeLineShader);
                const mesh = new THREE.LineSegments(geometry, material);
                
                // Start Transforms
                mesh.position.x += LETTER_OFFSET * index - START_OFFSET;
                mesh.rotation.x = -1.7;

                scene.add(mesh);
                objects.push({ obj: mesh, edgeCount: numSegments });
            }
        });
    });

	function resizeRendererToDisplaySize(renderer) {
		const canvas = renderer.domElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;
		if (needResize) {
			renderer.setSize(width, height, false);
		}
		return needResize;
	}

    // Start Animations

    let initStarted = false;
    const initAnimation = () => {

        const tl = gsap.timeline();

        tl.to(camera.position, { duration: 3, x: 20, y: 70, z: 80, ease: "power1"})
        objects.forEach(({ obj, edgeCount }, ndx) => {
            tl.to(obj.material.uniforms.time, { duration: DRAW_ANIM_DURATION, value: edgeCount }, 0)
            tl.to(obj.rotation, {duration: DRAW_ANIM_DURATION, x: -0.3}, 0)
        });

        tl.addLabel("step2");
        tl.to(camera.position, { duration: 1, x: 20, y: -20, z: 140, ease: "power4"}, "step2")
        tl.to(controls.target, { duration: 1, x: 0, y: -20, z: 0, ease: "power4"}, "step2")
    }

	function render(time) { // Animate Loop

		if (resizeRendererToDisplaySize(renderer)) {
			const canvas = renderer.domElement;
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
		}
        
        controls.update();
        if(!initStarted && objects.length >= START_STR.length) {
            initAnimation();
            initStarted = true;
        }

		renderer.render(scene, camera);
		requestAnimationFrame(render);
	}

	requestAnimationFrame(render);
}

main();
