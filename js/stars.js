import * as THREE from "three";

const MAX_RADIUS = 0.7, MIN_RADIUS = 0.4;

const randRange = (lower, upper = undefined) => upper ? Math.random() * (upper - lower) - lower : Math.random() * lower * 2 - lower;

export const addStars = (numStars, range, scene) => {
    for (let i = 0; i < numStars; i++) {
        const geometry = new THREE.SphereGeometry(randRange(MIN_RADIUS, MAX_RADIUS));
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const mesh = new THREE.Mesh(geometry, material);
        
        mesh.position.set(randRange(range.x), randRange(range.y), randRange(range.z));
    
        scene.add(mesh);
    }
}