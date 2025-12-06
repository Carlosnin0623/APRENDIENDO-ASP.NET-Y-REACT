export default function DestructurarEjemplo(){
    let persona = {
        nombre: "Felipe",
        apellido: "Gavilán",
        edad: 25,
        fechaActual: new Date()
    };


    // Ejemplo 1: Destructurando las propiedades de un objeto

    /*
    const nombre = persona.nombre;
    const apellido = persona.apellido;
    const edad = persona.edad;

    */

    // Ejemplo 2: Destructurar un objeto en variables, esta forma es mas rapida que la anterior

    const {nombre, edad, apellido} = persona;

    console.log(`${nombre} ${apellido} tiene ${edad} años de edad`);

    // Ejemplo 3: Destructurando el valor de retorno de una función

    const obtenerDireccion = () => {
        return {
            calle: "Calle Reparto Central #7",
            pais: 'República Dominicana',
            provincia: 'Santo Domingo'
        }
    }

    const {pais, provincia} = obtenerDireccion();

    console.log(`Mi país es: ${pais} y vivo en la provincia: ${provincia}`);


    // Ejemplo 4: Destructurando el parámetro de una función

    const imprimirNombre = (persona) => {
        console.log(persona.nombre);

        const nombreEnMayusculas = persona.nombre.toUpperCase();
        console.log(nombreEnMayusculas);
    }

    console.log(imprimirNombre(persona));

    // Ejemplo 5: Destructurando el parámetro de una función v2

    const imprimirNombre2 = ({nombre}) => {
        console.log(nombre);

        const nombreEnMayusculas = nombre.toUpperCase();
        console.log(nombreEnMayusculas);
    }

    console.log(imprimirNombre2(persona));


    // Ejemplo 6: Destructurar un arreglo

    const numeros = [1,2,3,4];

    const [primero, segundo, , cuarto] = numeros;
   //  console.log(primero, segundo, cuarto);

    // Ejemplo 7: Destructurar un arreglo dentro de una funcion

   const retornarArreglo = () => {
     return ['Felipe', 'Gavilan'];
   }

   const [nombre1, apellido1] = retornarArreglo();
   console.log(nombre1, apellido1);


}