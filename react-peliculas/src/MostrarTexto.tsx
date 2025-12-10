export default function MostrarTexto(props: MostrarTextoProps){

    return (
        <>
         <p>Haz escrito {props.texto}</p>
        </>
    )

}


// Interfacace

interface MostrarTextoProps{
   texto : string;
}