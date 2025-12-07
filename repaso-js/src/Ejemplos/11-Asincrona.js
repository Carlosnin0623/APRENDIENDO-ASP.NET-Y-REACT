/* Que es una promesa: Basicamente una promesa es una garantia de que una operacion o funcion
devolvera un resultado en el futuro, y esa cuando haya un resultado en el futuro te va a avisar y en
respuesta de ese aviso ejecutar nuestro codigo
*/

// Resolviendo una promesa usando fech

export function Promesa(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(respuesta => respuesta.json())
  .catch(error => console.log(`Ha ocurrido un error: ${error}`))
  .then(json => console.log(json));
}

// Resolviendo promesas usando Async Await es la forma mas intuitiva de resolver una promesa

export async function AsincAwait(){
  try{
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await respuesta.json();
    //debugger; Con esta palabra podemos hacer que la aplicacion se detenga y ver los valores que lleva hasta el momento
    console.log(json);
  }catch(error){
     console.error('Hubo un error en la resolucion de la promesa');
  }
}