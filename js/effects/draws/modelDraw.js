import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { gsap } from "gsap";

/* IMPORTANT NOTES FOR MODELDRAW

- Input path must be from THIS FILE, not the file calling the function
	- To be fixed later
- For the model, be sure APPLY ALL TRANSFORMS, and ADD A EMMISSIVE MATERIAL!

*/

export const getModelDrawObject = (path) => {
	const loader = new GLTFLoader();
	let model;

	loader.load(path, (gltf) => {
		let bufferGeom;
        gltf.scene.traverse(function (obj) {
			if (obj.isMesh) {
				bufferGeom = obj.geometry;
				return;
			}
		});

		const geometry = new THREE.EdgesGeometry(bufferGeom);
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

		model = { mesh: mesh, edgeCount: numSegments };
	});

	// Don't like how I did this? WELL GUESS WHAT CHATGPT WROTE IT SO GO ARGUE WITH IT NOT ME
	return new Promise((resolve, reject) => {
		const checkVal = () => {
			if(model) resolve(model);
			else setTimeout(checkVal, 100);
		}
		checkVal();
	})
	
};

export const drawModel = (object, duration, tl = undefined, tlPosition = undefined) => {
	(tl ? tl : gsap).to(...[
		object.mesh.material.uniforms.time,
		{ duration: duration, value: object.edgeCount },
		tlPosition && tlPosition
	]);
};

export const undrawModel = (object, duration, tl = undefined) => {
	(tl ? tl : gsap).to(
		object.mesh.material.uniforms.time,
		{ duration: duration, value: 0 },
		0
	);
};
