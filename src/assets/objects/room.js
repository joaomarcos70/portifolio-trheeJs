import * as THREE from 'three'

//criação do objeto
const material = new THREE.MeshLambertMaterial(
    {color: 0x348feb}
);
export const cube = new THREE.Mesh(
    new THREE.BoxGeometry(),
    material 
);