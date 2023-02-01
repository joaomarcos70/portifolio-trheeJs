import * as THREE from 'three'

/* const loader = new THREE.TextureLoader();
 const grass = new THREE.MeshStandardMaterial({
    map: loader.load('https://cdn.substance3d.com/v2/files/source/fb919c49-0c81-4fd3-a75d-b40f121b146c?format=jpeg&backgroundColor=30,30,30')
 }) */
 export const ground = new THREE.Mesh(
    new THREE.PlaneGeometry( 9, 9, 1, 1 ),
    new THREE.MeshPhongMaterial( { color: 0xa0adaf, shininess: 150 } )
);

ground.rotation.x = - Math.PI / 2; // rotates X/Y to X/Z
ground.receiveShadow = true;

