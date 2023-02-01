import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import THREEx3 from 'three-x3';
//criação do renderer
const options = {
    targetSelector: '#scene',
    width: 800, height: 600,
    backgroundColor: 0xd6d0cc
}

const renderer = new THREE.WebGLRenderer({
    antialias:true
})

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(options.width, options.height)

document.querySelector(options.targetSelector).appendChild(renderer.domElement)

//criaçãoo da cena
const scene = new THREE.Scene()

//criação da luz
const light = new THREE.HemisphereLight(
0xFFFFBB,0X080820, 2
);
scene.add(light);

//criação do objeto
const material = new THREE.MeshLambertMaterial(
    {color: 0x348feb}
);
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(),
    material 
);

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
  x3.add(light)

renderer.setAnimationLoop(()=>{
    x3.tick();
    x3.fps(()=>{
        renderer.render(scene, camera)
    })
})