import { gsap } from "gsap";
import { drawTextObjects } from "../effects/draws/textDraw";
import passiveOrbit from "../passiveOrbit/passiveOrbit";
import passiveOrbitMobile from "../passiveOrbit/passiveOrbitMobile";

function initAnimation(camera, heroText3D, letters, controls, isMobileDevice) {
    const DRAW_ANIM_DURATION = 1.5;
	const tl = gsap.timeline();

    // tl.set("#nav, #hero", { opacity: 0 });
    
	// Initial Draw-in
	tl.to(camera.position, {
		duration: 3,
		x: 10,
		y: 90,
		z: 100,
		ease: "power1",
	});

	//TODO: Change Camera position to vertAxis=0 to match text position for mobile

    tl.to(heroText3D.rotation, { duration: DRAW_ANIM_DURATION, x: -0.3 }, 0);
    drawTextObjects(letters, DRAW_ANIM_DURATION, tl, 0);

	tl.addLabel("step2");
	tl.to(
		camera.position,
		{ duration: 1, x: 0, y: isMobileDevice ? 0 : -20, z: 140, ease: "power4" },
		"step2"
	);
	tl.to(
		controls.target,
		{ duration: 1, x: 0, y: isMobileDevice ? -25 : -20, z: 0, ease: "power4" },
		"step2"
	);

	tl.set("#nav, #home", { visibility: "visible" });
	tl.to("#nav, #home", { opacity: 1, duration: 0.2 });

	if(isMobileDevice) {
		setTimeout(() => passiveOrbitMobile(20 * (Math.PI / 180), window.innerWidth, camera, controls, 20), 2700);
	} else {
		setTimeout(() => passiveOrbit(20 * (Math.PI / 180), window.innerWidth, camera, controls, 20), 2700)
	}

};

export default initAnimation;