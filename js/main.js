import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { gsap } from "gsap";

import { addStars } from "./background/stars";
import passiveOrbit from "./passiveOrbit/passiveOrbit";
import { drawObjects, getTextDrawObjects } from "./effects/textDraw/textDraw";
import "../index.css";

let renderer, camera, controls, scene, canvas;
let initStarted = false;

let heroText3D, letters;

function init() {
	canvas = document.querySelector("#c");
	renderer = new THREE.WebGLRenderer({ canvas: canvas });

	camera = new THREE.PerspectiveCamera(40, 2, 0.1, 1000);
	camera.position.set(0, 20, 120);

	scene = new THREE.Scene();
	scene.background = 0x000000;

	controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
	controls.target = new THREE.Vector3(0, 10, 0);

	controls.enableZoom = true;
	controls.enablePan = true;
	controls.enableRotate = true;

	// Effect Composer
	const renderScene = new RenderPass(scene, camera);
	const composer = new EffectComposer(renderer);
	composer.addPass(renderScene);
}

function checkAspectRatio() {
	const canvas = renderer.domElement;
	const needResize =
		canvas.width !== canvas.clientWidth ||
		canvas.height !== canvas.clientHeight;
	if (needResize)
		renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
	if (needResize) {
		const canvas = renderer.domElement;
		camera.aspect = canvas.clientWidth / canvas.clientHeight;
		camera.updateProjectionMatrix();
	}
}

function setup() {
	// Add Stars
    addStars(100, { x: 100, y: 100, z: 100 }, scene);

    // Create Text
    const { lettersParent, objects } = getTextDrawObjects("CTRL HACKS '23", 9, {});
    heroText3D = lettersParent;
    letters = objects;

    heroText3D.rotation.x = -1.7;
    scene.add(heroText3D);
}

function initAnimation() {
    const DRAW_ANIM_DURATION = 1.5;
	const tl = gsap.timeline();
    
	// Initial Draw-in
	tl.to(camera.position, {
		duration: 3,
		x: 10,
		y: 90,
		z: 100,
		ease: "power1",
	});

    tl.to(heroText3D.rotation, { duration: DRAW_ANIM_DURATION, x: -0.3 }, 0);
    drawObjects(letters, tl, DRAW_ANIM_DURATION);
    

	tl.addLabel("step2");
	tl.to(
		camera.position,
		{ duration: 1, x: 0, y: -20, z: 140, ease: "power4" },
		"step2"
	);
	tl.to(
		controls.target,
		{ duration: 1, x: 0, y: -20, z: 0, ease: "power4" },
		"step2"
	);

	tl.to("nav", { opacity: 1, duration: 0.2 });
	tl.to(".hero", { opacity: 1, duration: 0.2, delay: "-=0.1" });

	setTimeout(() => passiveOrbit(20 * (Math.PI / 180), window.innerWidth, camera), 2700)
};

function animate() {
	checkAspectRatio();
    controls.update();

    // Is this a lazy solution? Probably. Do I care? No. Deal with it or solve it yourself. It is like 1am and im going maaaaaaaaaaaaaaaaaaaaaaaaad
    if(letters.length && !initStarted) {
        initAnimation(letters);
        initStarted = true;
    }

	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}

init();
setup();
animate();