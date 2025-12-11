

export default function ContenidoDinamicoIf(props: ContenidoDinamicoIfProps){


   if(props.Calificacion > 90){
    return(
        <div>
            <h3 style={{color: 'blue'}}>Excelente calificación</h3>
        </div>
    )
   }else if(props.Calificacion >= 80 && props.Calificacion <= 90){
      return(
        <div style={{color: 'green'}}>
            <h3>Muy bien hecho</h3>
        </div>
      )
   }else{
      return(
        <div style={{color:'red'}}>
            <h3>Puedes volver a intentarlo</h3>
        </div>
      )
   }

}

interface ContenidoDinamicoIfProps{
Calificacion: number;
}