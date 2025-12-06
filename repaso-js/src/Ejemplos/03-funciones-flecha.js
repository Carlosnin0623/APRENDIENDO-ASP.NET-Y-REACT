function duplicar(valor) {
    return valor * 2;
}

// Función fecla o función anonima

let funcionAnonimas = (valor) => {
    return valor * 2
}

// cuando la funcion tiene 1 solo parametros no lleva corchetes
let funcionAnonima2 = valor => valor * 2;

funcionAnonima2(3); // 6'


// Ejemplos de funciones anonimas

let sumar = (sumando1, sumando2) => sumando1 + sumando2;

let resultado = sumar(2, 3)  // 5;

console.log(resultado);

// Funcion tipo flecha sin parametros

let imprimirAlgo = () => console.log("Prueba");
imprimirAlgo();

function FuncionQueRecibeComoParametroUnaFuncion(funcion) {
    funcion();
}
// LLamar una funcion dentro de otra con una funcion normal
FuncionQueRecibeComoParametroUnaFuncion(imprimirAlgo);

// LLamar una funcion dentro de otra con una funcion flecha

FuncionQueRecibeComoParametroUnaFuncion(() => console.log('Lo que yo quiera'));


export function EjemploThis() {
    const persona = {
        nombre: 'Felipe',
        edad: 58,
        saludarNormal: function () {
            setTimeout(function () {
                console.log('Hola soy ' + this.nombre)
            }, 1000)
        },

        saludarFlecha: function(){
            setTimeout(()=> {
                 console.log('Hola soy ' + this.nombre)
            },1000)
        }
    }

    persona.saludarNormal(); // Undefined
    persona.saludarFlecha(); // Hola soy Felipe

}

/* Porque uno funciona de la manera esperada y el otro no 

  // persona.saludarNormal(); // Undefined
 // persona.saludarFlecha(); // Hola soy Felipe

En una funcion ordinaria, el this no hace referencia al lugar donde fue declarado, si no el lugar 
donde se ejecuta la funcion, es decir en el archivo donde se llama la funcion, en este caso mi archivo main.js,
Lo que se ejecuta en el contexto de window, donde window es el objeto que representa a mi navegador en mi caso
google crome, y busca la propiedad nombre dentro del objeto window que nunca va a estar


    saludarNormal: function () {
            setTimeout(function () {
                console.log('Hola soy ' + this.nombre)
            }, 1000)
        },


Ahora en la función fecla el this representa el objeto en el cual fue declarada la funcion
y como esa funcion fue declarada dentro del objeto persona, pues this hace referencia a persona, por
tanto this.nombre hacer referencia al nombre del objeto persona.

saludarFlecha: function(){
            setTimeout(()=> {
                 console.log('Hola soy ' + this.nombre)
            },1000)
        }


*/
