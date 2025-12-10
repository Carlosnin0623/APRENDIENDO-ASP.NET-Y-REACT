export default function ContenidoDinamico(props: ContenidoDinamicoProps){
  return(
    <>
     {props.mostrarContenido ? <p>Mostrando el mensaje secreto</p> : <p>Ocultando el mensaje</p>}
    </>
  )
}

interface ContenidoDinamicoProps{
 mostrarContenido: boolean
}