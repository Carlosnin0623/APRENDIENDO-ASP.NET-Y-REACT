/* La funcion map: Permite poder proyectar contenido de un arreglo para tranformarlo
en otro */

export default function MapEjemplo(){
    // Ejemplo 1: Tranformando números.

    const numeros = [1,2,3,4,5];

    const cuadrado = numeros.map(valor => valor * valor); // Resultado [1,4,9,16,25]

    console.log(cuadrado);

    // Ejemplo 2: Extrayendo un valor de un arreglo de objetos
    const personas = [
        {id: 1, nombre: 'Felipe', pais: 'RD'},
        {id: 2, nombre: 'Claudia', pais: 'México'},
        {id: 3, nombre: 'Roberto', pais: 'Chile'},
    ]

    console.log(personas);

    const ids = personas.map(persona => persona.id);
    console.log(ids);

    const nombres = personas.map(persona => persona.nombre);
    console.log(nombres);

    // Retornando los datos necesarios del objeto persona en otra variable

    const nombresYpaises = personas.map(persona => {
        return {
            nombre: persona.nombre,
            pais: persona.pais
        }
    });

    console.log(nombresYpaises);


    // Ejemplo 3: Generando UI

    const elementosDeLista = numeros.map(valor => 
        `<li>${valor} </li>`
    );


    const lista = `
      <ul>
       ${elementosDeLista.join("")}
      </ul>
    `;

    console.log(lista);

    return lista;
}