// Scope global variables
function showConst() {
  const dreams = "Ser un experto en progeamación";
}
showConst();

//console.log(dreams) // Error: dreams is not defined

// Block scope global variables

{
  let food = "Pizaza its mi favorite";
}

//console.log(food) // Error: food is not defined

// Closure
function time() {
  let count = 0;
  function add() {
    count++;
    console.log(count);
  }
  return add();
}

//CLASS

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
  }
}

const persona1 = new Persona("Jose", 30);
console.log(persona1.saludar());

// static
class Biblioteca {
  #ubicacion

  constructor(ubicacion) {
    this.#ubicacion = ubicacion;
  }

  obtenerUbicacion() {
    return this.#ubicacion
  }

  static BooksPrograming = [];

  static agregarLibro(...libro) {
    this.BooksPrograming.push(libro);
    return this.BooksPrograming;
  }
}

class Biblioteca_Digital extends Biblioteca {
  constructor(plataforma, ubicacion) {
    super(ubicacion);
    this.plataforma = plataforma;
  }

  mostrarPlataforma() {
    console.log(this.plataforma, this.obtenerUbicacion()); 
  }
}

console.log(
  Biblioteca.agregarLibro(
    "You Don’t Know JS Yet: Get Started, 3rd Edition",
    "Machine Learning with Python",
    "JavaScript: The Good Parts, 2nd Edition"
  )
);


const addDirecion = new Biblioteca('Calle 25 false 456')
addDirecion.obtenerUbicacion()

const digital = new Biblioteca_Digital("Google Books");
digital.mostrarPlataforma();