function funcionExportada(){
    console.log("Ejecutando la función exportada");
}

function funcionOculta(){
    console.log("Esta funcion no puede ser invocada fuera de este modulo");
}

export {funcionExportada, funcionOculta};