/*
let aprendiendoJS = 'Juan';

console.log(aprendiendoJS);
*/
/*
// SCOPE de una variable
let musica = 'Rock';

if (musica) {
  let musica = 'Grunge';
  console.log('dentro del if: ', musica);
}
*/
/*
// template string `` comillas torcidas

const NOMBRE = 'Dani';
const TRABAJO = 'Jefaso';

console.log(`Nombre: ${NOMBRE}, trabajo: ${TRABAJO}`);
*/
/*
//funciones

function saludar(nombre) {
  console.log(`Bienvenido ${nombre}`);
}

saludar('Juan');

//function expression

const cliente = function(nombreCliente) {
  console.log(`Datos bla bla, ${nombreCliente}`);
}
cliente('Juan');

//parámetro por default en funciones

const actividad = function(nombre = 'Def', actividad = 'Mitica') {
  console.log(`La persona ${nombre}, aprende la actividad ${actividad}`);
}

actividad('Dani', 'Buceo');
actividad();

// Arrow functions

// Arrow function pero como solo tiene un return se puede poner como abajo
/*
let viajando = (destino) => {
  return `Viajando a la ciudad de ${destino}`;
}
*/
/*
let viajando = (destino) => `Viajando a la ciudad de ${destino}`;

let viaje = viajando('Paris');
let segundoViaje = viajando('Casa');
console.log(viaje);
console.log(segundoViaje);

// Objetos

function mostarInfoTarea(tarea, prioridad) {
  return `La tarea ${tarea} tiene una prioridad de ${prioridad}`;
}

// Object literal

let persona = {
  nombre: 'Juan',
  profesion: 'Nini',
  edad: 21
};
console.log(persona);

// Object constructor (ahora clases)

function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.tarea = urgencia;
}

const tarea1 = new Tarea('Aprender Js', 'rápido');

const mostarInfo = mostarInfoTarea(tarea1.nombre, tarea1.tarea);
console.log(tarea1);
console.log(mostarInfo);

//prototypes igual que clases con metodos

// Destruccion de objetos

let aprendiendoJS = {
  version: 'asdasda',
  framework: ['React', 'Angular', 'Vue']
}
console.log(aprendiendoJS);

let {version, framework} = aprendiendoJS;
console.log(version);
console.log(framework);
*/

// Object literal enhacement
/*
let banda = 'Metallica';
let genero = 'Heavy Metal';
let canciones = ['Master of Puppets', 'Seek & destroy', 'Enter Sandman'];

let metallica = {banda, genero, canciones};
console.log(metallica);
*/

//metodos o funciones en un objecto
/*
let persona = {
  nombre: 'Dani',
  trabajo: 'jsDev',
  edad: 20,
  mostarInfomacion() {
    console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
  }
}
persona.mostarInfomacion();

*/

// Arreglos y .map

let carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
//console.log(carrito);

let appContenedor = document.querySelector('#app');
//appContenedor.innerHTML = carrito;
/* Esto es una manera
let html = '';
carrito.forEach(producto => {
  html += `<li>${producto}</li>`;
})
appContenedor.innerHTML = html
*//*
carrito.map(producto => {
  return 'El producto es ' + producto;
});
*/

// Object keys
/*
let persona = {
  nombre: 'Dani',
  trabajo: 'jsDev',
  edad: 20,
}

console.log(Object.keys(persona));
*/
/*
// Spread operator ...

let lenguajes = ['Python', 'JS', 'PHP'];
let frameworks = ['Django', 'ReactJS', 'Laravel'];
/*
let combinacion = lenguajes.concat(frameworks); // Forma vieja
*/
/*
let combinacion = [...lenguajes, ...frameworks]

let [ultimo] = [...lenguajes].reverse(); 
console.log(combinacion);
console.log(ultimo);
*/
/*
function sum(a, b, c) {
  console.log(a + b + c);
}

let numeros = [1, 2, 3];
sum(...numeros);
*/

// Métodos en arreglos
/*
const personas = [
  {nombre: 'Dani', edad: 22, aprendiendo: 'JS'},
  {nombre: 'Pablo', edad: 56, aprendiendo: 'Py'},
  {nombre: 'Ale', edad: 25, aprendiendo: 'PHP'},
  {nombre: 'Migue', edad: 12, aprendiendo: 'JS'},
  {nombre: 'Pepe', edad: 88, aprendiendo: 'C++'},
]

// mayores de 28 años filter

let mayores = personas.filter(persona => {
  return persona.edad > 25;
})

console.log(mayores);

// que aprende pablo y edad find

const pablo = personas.find(persona => {
  return persona.nombre = 'Pablo';
})
console.log(pablo);

let total = personas.reduce((edadTotal, persona) => {
  return edadTotal + persona.edad;
}, 0)

console.log(total);
*/



// Promises
/*
const aplicarDescuento = new Promise((resolve, reject) => {
  setTimeout(() => {
    let descuento = true;
    if (descuento)
      resolve('Descuento aplicado');
    else
      reject('No se aplico descuento');
  }, 3000)
});

aplicarDescuento.then(resultado => {
  console.log(aplicarDescuento);
})
*/

// Promises con AYAX
/*
const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
  // pasar la cantidad a la api
  const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

  // llamado a Ajax

  const xhr = new XMLHttpRequest();

  // Abrir la conexión

  xhr.open('GET', api, true);

  // on load

  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.responseText).results);
    }
    else {
      reject(Error(xhr.statusText));
    }
  }

  // on error
  xhr.onerror = (error) => reject(error);

  xhr.send();
});

descargarUsuarios(20).then(miembros => console.log(miembros));
*/

// Clases y heredar
/*
class Tarea {
  constructor(nombre, prior) {
    this.nombre = nombre;
    this.prioridad = prior;
  }
  mostrar() {
    console.log(`${this.nombre} tiene una prioridad ${this.prioridad}`);
  }
}

class ComprasPendientes extends Tarea {
  constructor(nombre, prior, cantidad) {
    super(nombre, prior)
    this.cantidad = cantidad;
  }
}


let tarea1 = new Tarea('Aprende JS', 'Alta')
let tarea2 = new Tarea('Pasear Perro', 'Alta')
let tarea3 = new Tarea('Cagar', 'Media')

tarea1.mostrar();
tarea2.mostrar();
tarea3.mostrar();

let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);
console.log(compra1);
compra1.mostrar();
*/

// Módulos en JS import y export
/*
import { nombreTarea, crearTarea }  from './tareas.js';

console.log(nombreTarea);

const tarea1 = crearTarea('Pasear al perro', 'media');
console.log(tarea1);
*/
