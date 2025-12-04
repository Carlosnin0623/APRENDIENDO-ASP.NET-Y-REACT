export default function VariablesEjemplo(){
   // Variable Let
    let apellido = "Nin";
    apellido = "Marrero";
    let edad = 28;
    let fecha = new Date();

    let persona = {
        nombre: 'Felipe',
        apellido: 'Gavilan',
        edad: 55,
        fecha: new Date(),
        estadoLogueado: true
    }

    console.log(persona);

    let miFuncion = function duplicar(valor){
        return valor * 2;
    }

    console.log(miFuncion(25));

    // Variable con var

    var pais = "República Dominicana";
    pais = "México";

    for(let i = 1; i <= 10; i++){
        console.log(i);
    }

    // console.log(i);

 // Const: Variables constantes son aquellas que no pueden cambiar su valor y deben inicializarse siempre
    const continente = 'América';
   // continente = 'Europa'; // Esto mostrara error en la consola del navegador

    // Arreglos

    const ingredientes = ["Queso", "Jamón"];
    ingredientes.push("Vegetales");

    console.log(ingredientes);
}