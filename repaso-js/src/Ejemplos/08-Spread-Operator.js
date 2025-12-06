export default function OperadorSpread() {
    /* El Operador Spread, basicamente nos permite tomar un arreglo o un objeto
    y expandirlo, para que pueda satisfacer los parametros de una funcion, o las propiedades
    de un objeto.
    */

    const sumar = (a = 0, b = 0, c = 0) => (a + b) + c;

    const numeros = [2, 3, 10];

    /*  Operador Spread asigna automaticamente los valores a los parametros de la funcion sumar
     esto evita que tengamos que ponerlo nosotros manualmente.
    */
    const resultado = sumar(...numeros);

    console.log(resultado); // 15

    // Ejemplo 2: Concatenando arreglos con Spread Operator

    const masNumeros = [1, ...numeros];

    console.log(masNumeros); // Resultado: [1,2,3,10];

    // Ejemplo 3: Concatenando varios arreglos

    const otrosNumeros = [4, 5];
    const muchosNumeros = [...numeros, ...otrosNumeros];

    console.log(muchosNumeros); // Resultado: [2,3,10,4,5];


    // Ejemplo 4: Destructurando y usando el operador Spread sobre un arreglo

    const [primero, ...resto] = muchosNumeros;
    console.log(primero); // 2 saca el primer elemento
    console.log(resto);  // [3,10,4,5]; Devuelve los que quedan

    // Ejemplo 5: Clonando un arreglo con spread esto asegura que no se modifique el arreglo original

    const muchosNumerosClonados = [...muchosNumeros];
    muchosNumerosClonados.push(6);
    console.log(muchosNumeros); // [2,3,10,5]
    console.log(muchosNumerosClonados); // [2,3,10,5,6]

    // Ejemplo 6: Operador Spread sobre un objeto

    const persona = {
        nombre: "Felipe",
        apellido: "Gavilan"
    };

    const persona2 = {
        ...persona,  // Aqui estamos copiando el objeto persona y obteniendo sus propiedades.
        edad: 999,
        direccion: {
            pais: "RD",
            provincia: "Santo Domingo"
        }
    }

    console.log(persona2);

    /* Resultado persona2
    {
    "nombre": "Felipe",
    "apellido": "Gavilan",
    "edad": 999,
    "direccion": {
        "pais": "RD",
        "provincia": "Santo Domingo"
     }
    }

    */


    // Ejemplo 7: Clonando un objeto con llaves con spread operator

    const persona3 = {...persona2};
    persona3.nombre = "Claudia";
    persona3.apellido = "Gonzales";
    persona3.edad = 25;

    console.log(persona3);


    // Ejemplo 8: Destructuring y spread operator sobre un objeto

    const {edad, direccion, ...persona4} = persona2;

    console.log(edad);  // 999 
    console.log(direccion); // {pais: 'RD', provincia: 'Santo Domingo'}
    console.log(persona4); // {nombre: 'Felipe', apellido: 'Gavilan'}  resto


}