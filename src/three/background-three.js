import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import THREEx3 from 'three-x3';
import { cube } from '../assets/objects/cube';
import { plane } from '../assets/objects/plano';


//criação do renderer
const options = {
    targetSelector: '.landing',
    width: window.screen.width, height: window.screen.height,
    backgroundColor: 0xd3d0ce
}

const renderer = new THREE.WebGLRenderer({
    antialias:true
})
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(options.width, options.height)

document.querySelector(options.targetSelector).appendChild(renderer.domElement)

//criaçãoo da cena
const scene = new THREE.Scene()

//criação da luz
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set( 4.54, 4.19, 0 ); //default; light shining from top
directionalLight.castShadow = true;


cube.position.y = 1.11;
cube.castShadow = true

plane.rotation.x = THREE.MathUtils.degToRad(-90);
plane.receiveShadow = true;
plane.scale.x = 9
plane.scale.y = 9


scene.add(directionalLight);
scene.add(plane)
scene.add(cube);


//criação da camera
const camera = new THREE.PerspectiveCamera(
    50, options.width / options.height
);

camera.position.x = 3
camera.position.y = 2
camera.position.z = 5

const x3 = new THREEx3(
    { THREE, OrbitControls, camera, renderer, scene }
  );

  x3.add(camera, {open:false})
  x3.add(directionalLight)
  x3.add(plane)
  x3.add(cube)

renderer.setAnimationLoop(()=>{
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    x3.tick();
    x3.fps(()=>{
        renderer.render(scene, camera)
    })
})