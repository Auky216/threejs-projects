import * as THREE from 'three'; // Importo toda la libreria Three.js
import { FontLoader } from 'three/addons/loaders/FontLoader.js'; // Importo el cargador de fuentes
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'; // Importo la geometria de texto 3D

// Crear entorno de renderizado
const scene = new THREE.Scene(); // Creo la escena
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 75 = FOV, luego aspect ratio, plano cercano y plano lejano

const renderer = new THREE.WebGLRenderer(); // Creo el renderizador WebGL
renderer.setSize(window.innerWidth,window.innerHeight); // Tamano del canvas = tamano de la ventana
document.body.appendChild(renderer.domElement); // Agrego el canvas al HTML

camera.position.z = 5; // Alejo la camara para poder ver el texto

// Cargar fuente y crear texto
const loader = new FontLoader(); // Creo una instancia del cargador de fuentes
loader.load(
    'https://unpkg.com/three@0.174.0/examples/fonts/helvetiker_regular.typeface.json', // URL de la fuente (viene incluida con Three.js)
    function (font) { // Esta funcion se ejecuta cuando la fuente termina de cargar

        const geometry = new TextGeometry('Hola Three.js!', { // Creo la geometria con el texto que quiero mostrar
            font: font, // La fuente que acabo de cargar
            size: 0.5, // Tamano de las letras
            depth: 0.2, // Profundidad/grosor del texto en 3D
        });

        geometry.center(); // Centro el texto en el origen (0,0,0) para que no quede desplazado

        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Material verde basico
        const text = new THREE.Mesh(geometry, material); // Combino geometria + material = objeto 3D
        scene.add(text); // Agrego el texto a la escena
    }
);

// Renderizar la Escena
function animate() { // Se ejecuta ~60 veces por segundo
    renderer.render(scene, camera); // Dibujo la escena
}
renderer.setAnimationLoop(animate); // Inicio el loop de animacion
