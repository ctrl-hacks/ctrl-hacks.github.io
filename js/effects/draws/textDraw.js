import * as THREE from "three";
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { gsap } from "gsap";

export const getTextDrawObjects = (text, letterOffset, properties = { size: 10, height: 2, curveSegments: 4, bevelEnabled: false }) => {
    const lettersParent = new THREE.Group();
    const objects = [];
        
    text.split('').forEach((letter, index) => {
        const loader = new FontLoader();
        const fontPath = import.meta.env.PROD ? '../fonts/Space-Grotesk-Bold.json' : 'fonts/Space-Grotesk-Bold.json';
        loader.load(fontPath, (font) => {
            const textGeom = new TextGeometry(letter, {
                font: font,
                ...properties
            });
    
            {
                // using edges just to get rid of the lines triangles
                const geometry = new THREE.EdgesGeometry(textGeom);
                const numVertices = geometry.getAttribute("position").count;
                const counts = new Float32Array(numVertices);
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
                mesh.position.x += letterOffset * index - (text.length / 2 * letterOffset);
    
                lettersParent.add(mesh);
                objects.push({ mesh: mesh, edgeCount: numSegments, letter: letter });
            }
        });
    });

    return new Promise((resolve, reject) => {
		const checkVal = () => {
			if(objects.length === text.length) resolve({ lettersParent, objects });
			else setTimeout(checkVal, 100);
		}
		checkVal();
	})
}

export const drawTextObjects = (objects, duration, tl = undefined, tlPosition = undefined) => {
    objects.forEach(({ mesh, edgeCount, letter }, ndx) => {
		(tl ? tl : gsap).to(...[
			mesh.material.uniforms.time,
			{ duration: duration, value: edgeCount },
			tlPosition && tlPosition
        ]);
	});
}

export const undrawTextObjects = (objects, duration, tl = undefined) => {
    objects.forEach(({ mesh, edgeCount, letter }, ndx) => {
		(tl ? tl : gsap).to(...[
			mesh.material.uniforms.time,
			{ duration: duration, value: 0 },
            tl && 0
        ]);
	});
}