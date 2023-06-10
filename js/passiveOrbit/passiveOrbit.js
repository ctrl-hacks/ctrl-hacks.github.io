const mapRange = (value, fromMin, fromMax, toMin, toMax) => (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;

const passiveOrbit = (maxThetaX, windowInnerWidth, camera) => {
    document.addEventListener("mousemove", (e) => {
        const windowWidthHalf = windowInnerWidth / 2;
        const x = e.clientX - windowWidthHalf;

        const thetaX =
            mapRange(
                x,
                -windowWidthHalf,
                windowWidthHalf,
                -maxThetaX,
                maxThetaX
            ) +
            Math.PI / 2;
        camera.position.set(
            141.4 * Math.cos(thetaX),
            -20,
            141.41 * Math.sin(thetaX)
        );
    });
}

export default passiveOrbit;