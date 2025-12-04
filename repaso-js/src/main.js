import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { funcionExportada, configuracionesGlobales } from './Ejemplos/modulo.js' 
// De esta forma se importan los funciones por default
import funcionPrincipal from './Ejemplos/modulo.js'
import VariablesEjemplo from './Ejemplos/variables.js'
import { EjemploThis } from './Ejemplos/funciones-flecha.js'
import TemplateStringsEjemplo from './Ejemplos/TemplateStrings.js'
import OperadorTernarioEjemplo from './Ejemplos/operador-ternario.js'
import LiteralesDeObjetosMejorado from './Ejemplos/objeto-literal-mejorado.js'
import DestructurarEjemplo from './Ejemplos/destructurar.js'

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
DestructurarEjemplo();