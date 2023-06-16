import { gsap } from "gsap";
import { drawTextObjects } from "../effects/draws/textDraw";
import passiveOrbit from "../passiveOrbit/passiveOrbit";

function initAnimation(camera, heroText3D, letters, controls) {
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

    tl.to(heroText3D.rotation, { duration: DRAW_ANIM_DURATION, x: -0.3 }, 0);
    drawTextObjects(letters, DRAW_ANIM_DURATION, tl, 0);
    

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

	tl.set("#nav, #home", { visibility: "visible" });
	tl.to("#nav, #home", { opacity: 1, duration: 0.2 });

	setTimeout(() => passiveOrbit(20 * (Math.PI / 180), window.innerWidth, camera), 2700)
};

export default initAnimation;