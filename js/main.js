import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";

import initAnimation from "./gsap-anims/initAnim";
import { addStars } from "./background/stars";
import { drawTextObjects, getTextDrawObjects, undrawTextObjects } from "./effects/draws/textDraw";

import "../styles/index.css"
import { drawModel, getModelDrawObject } from "./effects/draws/modelDraw";
import navigation from "./pages/navigation";
import { gsap } from "gsap";

let renderer, camera, controls, scene, canvas;
let isMobileDevice = false;

const pageObjects = {
	home: {
		'heroText3D': undefined,
		'letters': undefined
	},
	about: {
		'towerModel': undefined,
		'aboutText3D': undefined,
		'aboutLetters': undefined
	},
	activePage: "home"
}

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

	controls.enableZoom = false;
	controls.enablePan = false;
	controls.enableRotate = false;

	// Effect Composer
	const renderScene = new RenderPass(scene, camera);
	const composer = new EffectComposer(renderer);
	composer.addPass(renderScene);

	const light = new THREE.AmbientLight( 0x404040, 200 ); // soft white light
	scene.add( light );
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

async function setup() {
	// Add Stars
    addStars(100, { x: 100, y: 100, z: 100 }, scene);

	// Mobile Alert
	if(window.innerWidth <= 1024) {

		isMobileDevice = true;

		const alert = document.getElementById("mobileAlert");
		gsap.to("#mobileAlert", { opacity: 1 });
		gsap.set("#mobileAlert", { visibility: "visible" });
		gsap.to("#mobileAlert", { opacity: 0, delay: 10 });
	}

	const mobileTextOptions = { size: 3, height: 0.5, curveSegments: 4, bevelEnabled: false };
	const desktopTextOptions = { size: 10, height: 2, curveSegments: 4, bevelEnabled: false };

    // Create Text
    const { lettersParent, objects } = await getTextDrawObjects("CTRL HACKS '23", isMobileDevice ? 3 : 9, isMobileDevice ? mobileTextOptions : desktopTextOptions);
	pageObjects['home']['heroText3D'] = lettersParent;
	pageObjects['home']['letters'] = objects;
	
    lettersParent.rotation.x = -1.7;
    scene.add(lettersParent);

	initAnimation(camera, pageObjects['home']['heroText3D'], pageObjects['home']['letters'], controls, isMobileDevice);

	//!SECTION AboutPage Objects
	// Calgary Tower Model
	const modelPath = import.meta.env.PROD ? '../tower.glb' : "../public/tower.glb";
	const model = await getModelDrawObject(modelPath); //Path is from modelDraw.js, NOT this file!
	pageObjects['about']['towerModel'] = model;
	model.mesh.scale.x = isMobileDevice ? 0.25 : 0.45;
	model.mesh.scale.y = isMobileDevice ? 0.25 : 0.45;
	model.mesh.scale.z = isMobileDevice ? 0.25 : 0.45;

	model.mesh.position.set(isMobileDevice ? 25 : 50, isMobileDevice ? -50 : -20, 0);
	scene.add(model.mesh);

	gsap.to(model.mesh.rotation, { y: 6.28, repeat: -1, ease: "linear", duration: 20 }); // Spin Animation


	const aboutTextOptions = { size: isMobileDevice ? 6 : 8, height: isMobileDevice ? 1.25 : 2, curveSegments: 4, bevelEnabled: false };

	// About 3D Title
	const aboutText3D = await getTextDrawObjects('|ABOUT', isMobileDevice ? 6 : 8, aboutTextOptions);
	pageObjects['about']['aboutText3D'] = aboutText3D.lettersParent;
	pageObjects['about']['aboutLetters'] = aboutText3D.objects;

	scene.add(aboutText3D.lettersParent);
	aboutText3D.lettersParent.rotation.x = -0.4;
	aboutText3D.lettersParent.position.x = isMobileDevice ? 0 : -35;
}

function animate() {
	checkAspectRatio();
    controls.update();
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}

// Credit to https://stackoverflow.com/questions/54986860/animated-wireframe-lines for wireframe effect thing

init();
setup();
navigation(pageObjects);
animate();