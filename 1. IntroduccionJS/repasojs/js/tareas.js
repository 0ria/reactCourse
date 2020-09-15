export const nombreTarea = 'Pasear al perro';

// exportar función

export const crearTarea = (tarea, urgencia) => {
  return `La tarea ${tarea} tiene una urgencia ${urgencia}`;
}

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