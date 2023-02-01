import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import THREEx3 from 'three-x3';
import { cube } from '../assets/objects/cube';
import { ground } from '../assets/objects/plano';
import {camera, renderer, light, spotLight} from './config'

const scene = new THREE.Scene()

cube.position.x = 2.07;
cube.position.y = 1.11;
cube.position.z = 0.95;
cube.castShadow = true


scene.add(cube, ground,light);


const x3 = new THREEx3(
    { THREE, OrbitControls, camera, renderer, scene }
  );

  x3.add(camera, {open:false})
  x3.add(light)
  x3.add(cube)


renderer.setAnimationLoop(()=>{
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    x3.tick();
    x3.fps(()=>{
        renderer.render(scene, camera)
    })
})