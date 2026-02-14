import * as THREE from 'three'; // Importo toda la libreria Three.js

// Crear entorno de renderizado
const scene = new THREE.Scene(); // Creo la escena, es el contenedor donde van todos los objetos, luces y camaras
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// Creo una camara en perspectiva:
//   75 = campo de vision (FOV) en grados
//   window.innerWidth / window.innerHeight = relacion de aspecto (evita que la imagen se deforme)
//   0.1 = plano cercano (objetos mas cerca de esto no se ven)
//   1000 = plano lejano (objetos mas lejos de esto no se ven)


const renderer = new THREE.WebGLRenderer(); // Creo el renderizador WebGL, es el que dibuja todo en pantalla
renderer.setSize(window.innerWidth,window.innerHeight); // Defino el tamano del canvas al tamano de la ventana
document.body.appendChild(renderer.domElement); // Agrego el canvas (<canvas>) al HTML


// Crear objeto
const geometry = new THREE.BoxGeometry(1,1,1); // Creo la Geometria (forma de cubo de 1x1x1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Creo un material basico color verde (no reacciona a luces)
const  cube = new THREE.Mesh(geometry,material); // Combino geometria + material para crear el objeto 3D (mesh)
scene.add(cube); // Agrego el cubo a la escena

camera.position.z = 5; // Alejo la camara 5 unidades hacia atras para poder ver el cubo (por defecto todo esta en 0,0,0)


// Renderizar la Escena
function animate() { // Esta funcion se ejecuta en cada frame (~60 veces por segundo)

    cube.rotation.x += 0.01; // Roto el cubo 0.01 radianes en el eje X por cada frame
    cube.rotation.y += 0.01; // Roto el cubo 0.01 radianes en el eje Y por cada frame
    renderer.render( scene, camera ); // Dibujo la escena desde el punto de vista de la camara
}
renderer.setAnimationLoop(animate); // Inicio el loop de animacion (llama a animate() en cada frame)
