import * as THREE from 'three'

const planeGeometry = new THREE.PlaneGeometry( 20, 20, 32, 32 );
const planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
export const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.receiveShadow = true;
