import * as THREE from 'three'
//criação do renderer
const options = {
    targetSelector: '#scene',
    width: 800, height: 600,
    backgroundColor: 0xd6d0cc
}

const renderer = new THREE.WebGLRenderer()

renderer.setSize(options.width, options.height)

document.querySelector(options.targetSelector).appendChild(renderer.domElement)

//criaçãoo da cena
const scene = new THREE.Scene()

//criação do objeto
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial(
    {color: 0xeb3432}
);

const cube = new THREE.Mesh(
    geometry, material 
);

scene.add(cube);


//criação da camera
const camera = new THREE.PerspectiveCamera(
    50, options.width / options.height
);

camera.position.z = 5

renderer.setAnimationLoop(()=>{
    cube.rotation.x +=0.01;
    cube.rotation.y +=0.01;
    renderer.render(scene, camera)
})
