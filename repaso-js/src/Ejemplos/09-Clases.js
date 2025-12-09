export  class Rectangulo {
// El constructor es una funcion que nos permite inicializar las propiedades dentro de una clase

    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    area(){
      return `El area del rectangulo es ${this.alto * this.ancho}`;
    }
}

// Herencia: Consiste en heredar las propiedades de una clase en otra

export class Cuadrado extends Rectangulo{

    constructor(alto){
    // Super hace referencia a la clase padre Reactangulo, y nos permite llenar sus propiedades
    // y usarla en la nueva clase hija como deseemos
        super(alto, alto) 
    }

      // Sobrescribiendo la funcion area para la clase Cuadrado
    area(){
        return `El area del cuadrado es ${this.alto * this.alto}`;
    }
}