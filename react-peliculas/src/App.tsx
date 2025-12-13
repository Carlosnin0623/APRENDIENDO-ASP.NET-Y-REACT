import { useState } from "react"
import ContenidoDinamico from "./ContenidoDinamico";
import ContenidoDinamicoIf from "./ContenidoDinamicoIf";
import Tabla from "./Tabla";
import EjemploUseEffect from "./EjemploUseEffect";
import EjemploUseContext from "./EjemploUseContext/EjemploUseContext";


export default function App() {

   const [mostrar, setMostrar] = useState(false);

   const [calificacion, setCalificacion] = useState<number | null>(null);

   const [mostrado, setMostrado] = useState(false);
   
  return (
    <>
      <input type="checkbox" onChange={(e) => setMostrar(e.target.checked)}/>
      <label>Mostrar contenido oculto</label>

      <ContenidoDinamico mostrarContenido={mostrar} />

      <hr/>

      <label>Ingrese la calificación</label>
      <input type="number" onChange={e => setCalificacion(Number(e.target.value))}></input>

      {calificacion ? <ContenidoDinamicoIf Calificacion={calificacion} /> : undefined}


      <Tabla/>

       <input type="checkbox" defaultChecked={mostrado} onChange={e => setMostrado(e.target.checked)}/> Mostra Componente

       
      {mostrado ? <EjemploUseEffect /> : undefined}

      <h2>Ejemplo Use Context</h2>
      <EjemploUseContext />
    </>
  )

}