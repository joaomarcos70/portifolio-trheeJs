import * as THREE from 'three'

const options = {
    targetSelector: '.landing',
    width: window.screen.width, height: window.screen.height,
    backgroundColor: 0xd3d0ce
}

export const camera = new THREE.PerspectiveCamera(
    50, options.width / options.height
);

camera.position.x = 4.89
camera.position.y = 2.81
camera.position.z = 6.21


export const renderer = new THREE.WebGLRenderer({
    antialias:true
})
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(options.width, options.height)

document.querySelector(options.targetSelector).appendChild(renderer.domElement)


export const light = new THREE.DirectionalLight( 0xffffff, 0.5 );
light.position.set( 4.54, 4.19, 0 ); //default; light shining from top
light.castShadow = true;

export const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.angle = Math.PI / 5;
spotLight.penumbra = 0.2;
spotLight.position.set( 2, 3, 3 );
spotLight.castShadow = true;
spotLight.shadow.camera.near = 3;
spotLight.shadow.camera.far = 10;
