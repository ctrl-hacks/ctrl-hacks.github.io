const mapRange = (value, fromMin, fromMax, toMin, toMax) => (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;

const passiveOrbit = (maxThetaX, windowInnerWidth, camera, controls, scrollStart) => {

    document.addEventListener("mousemove", (e) => {
        const windowWidthHalf = windowInnerWidth / 2;
        const x = e.clientX - windowWidthHalf;

        const thetaX = mapRange(x, -windowWidthHalf, windowWidthHalf, -maxThetaX, maxThetaX) + Math.PI / 2;
        // camera.position.set( 141.4 * Math.cos(thetaX), -20, 141.41 * Math.sin(thetaX));
        camera.position.x = 141.4 * Math.cos(thetaX);
        camera.position.z = 141.41 * Math.sin(thetaX);
    });

    document.addEventListener("scroll", (e) => {
        const scrollPos = mapRange(window.scrollY, 0, window.innerHeight, 0, 120) + scrollStart;
        camera.position.y = -scrollPos;
        controls.target.y = -scrollPos;

        // console.log(scrollPos / 10);
    })
}

export default passiveOrbit;