export default function ContenidoDinamico(props: ContenidoDinamicoProps){
  return(
    <>
     {props.mostrarContenido ? <p>Mostrando el mensaje secreto</p> : undefined}
    </>
  )
}

interface ContenidoDinamicoProps{
 mostrarContenido: boolean
}