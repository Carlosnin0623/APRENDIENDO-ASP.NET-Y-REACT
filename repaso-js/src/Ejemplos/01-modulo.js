// Funciones en Javascript //

function funcionExportada(){
    console.log("Ejecutando la función exportada");
}

// Objetos en Javascript

let configuracionesGlobales = {
    idioma: 'ESP',
    logueado: false
}

// Funciones exportadas por default

export default function funcionPrincipal(){
    console.log("Esta es una funcion principal")
}

// Funcioes exportada de forma selectiva

export {funcionExportada, configuracionesGlobales};