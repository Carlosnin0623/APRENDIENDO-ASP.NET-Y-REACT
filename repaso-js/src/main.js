import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { funcionExportada, configuracionesGlobales } from './Ejemplos/01-modulo.js' 
// De esta forma se importan los funciones por default
import funcionPrincipal from './Ejemplos/01-modulo.js'
import VariablesEjemplo from './Ejemplos/02-variables.js'
import { EjemploThis } from './Ejemplos/03-funciones-flecha.js'
import TemplateStringsEjemplo from './Ejemplos/04-TemplateStrings.js'
import OperadorTernarioEjemplo from './Ejemplos/05-operador-ternario.js'
import LiteralesDeObjetosMejorado from './Ejemplos/06-objeto-literal-mejorado.js'
import DestructurarEjemplo from './Ejemplos/07-destructurar.js'
import OperadorSpread from './Ejemplos/08-Spread-Operator.js'
import { Rectangulo, Cuadrado } from './Ejemplos/09-Clases.js'
import MapEjemplo from './Ejemplos/10-Arreglo-map.js'
import { Promesa, AsincAwait } from './Ejemplos/11-Asincrona.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>

    <div id="listado">

    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))

/*
funcionExportada();
console.log(configuracionesGlobales.idioma);
funcionPrincipal();

*/

//VariablesEjemplo();

//window.nombre = "Claudia";
//EjemploThis();
//TemplateStringsEjemplo();
//OperadorTernarioEjemplo();
//LiteralesDeObjetosMejorado();
//DestructurarEjemplo();
//OperadorSpread();

// LLamando una clase Reactangulo para luego instanciarla
//const rectangulo1 = new Rectangulo(2,3);

//console.log(rectangulo1);
//console.log(rectangulo1.area());

//const cuadrado1 = new Cuadrado(5);
//console.log(cuadrado1.area());
//const lista = MapEjemplo();

//document.querySelector("#listado").innerHTML = lista;

Promesa();
AsincAwait();