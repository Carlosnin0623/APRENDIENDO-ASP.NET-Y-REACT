import { useState } from "react"
import ContenidoDinamico from "./ContenidoDinamico";
import ContenidoDinamicoIf from "./ContenidoDinamicoIf";
import TablaMemorizar from "./EjemploUseMemo/TablaMemorizar";
import EjemploUseEffect from "./EjemploUseEffect";
import EjemploUseContext from "./EjemploUseContext/EjemploUseContext";
import EjemploMemorizar from "./EjemploUseMemo/EjemploMemorizar";


export default function App() {

   const [mostrar, setMostrar] = useState(false);

   const [calificacion, setCalificacion] = useState<number | null>(null);

   const [mostrado, setMostrado] = useState(false);

   const [nombre, setNombre] = useState('');
   
  return (
    <>
      <input type="checkbox" onChange={(e) => setMostrar(e.target.checked)}/>
      <label>Mostrar contenido oculto</label>

      <ContenidoDinamico mostrarContenido={mostrar} />

      <hr/>

      <label>Ingrese la calificación</label>
      <input type="number" onChange={e => setCalificacion(Number(e.target.value))}></input>

      {calificacion ? <ContenidoDinamicoIf Calificacion={calificacion} /> : undefined}

      <p>El texto es: <input type="text" onChange={e => setNombre(e.target.value)}></input></p> 

      <p>Mi nombre es: {nombre} </p>

      <TablaMemorizar/>

       <input type="checkbox" defaultChecked={mostrado} onChange={e => setMostrado(e.target.checked)}/> Mostra Componente

       
      {mostrado ? <EjemploUseEffect /> : undefined}

      <h2>Ejemplo Use Context</h2>
      <EjemploUseContext />


      <h2>Ejemplo Memorizar</h2>
      <EjemploMemorizar />
    </>
  )

}