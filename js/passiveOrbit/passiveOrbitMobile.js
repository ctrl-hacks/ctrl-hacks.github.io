const mapRange = (value, fromMin, fromMax, toMin, toMax) => (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;

const thetaMax = (Math.PI / 180) * 40 + Math.PI/2;
const thetaMin = -(Math.PI / 180) * 40 + Math.PI/2;

let thetaX = Math.PI/2, velocity = 0.002;

const passiveOrbitMobile = (maxThetaX, windowInnerWidth, camera, controls, scrollStart) => {

    console.log(camera);

    setInterval(() => {
        if(velocity >= 0 && thetaX < thetaMax) {
            thetaX += velocity;
        } else if(velocity >= 0 && thetaX >= thetaMax) {
            velocity *= -1;
            thetaX += velocity;
        } else if (velocity < 0 && thetaX >= thetaMin) {
            thetaX += velocity;
        } else {
            velocity *= -1;
            thetaX += velocity;
        }

        camera.position.x = 141.41 * Math.cos(thetaX);
        camera.position.z = 141.41 * Math.sin(thetaX);
    }, 50)



    document.addEventListener("scroll", (e) => {
        const scrollPos = mapRange(window.scrollY, 0, window.innerHeight, 0, 120) + scrollStart;
        camera.position.y = -scrollPos;
        controls.target.y = -scrollPos;
    })
}

export default passiveOrbitMobile;