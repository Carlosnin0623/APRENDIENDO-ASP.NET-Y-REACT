import type React from "react";

/* Pasar un elemento a otro componente con React.React.Node */

export default function ProyectarContenido2(props: ProyectarContenido2Props){

    return(
        <>
         {props.parteSuperior}
         <hr/>
         {props.ParteIntermedia}
         <hr/>
         {props.parteInferior}
         <hr/>
        </>
    )

}

interface ProyectarContenido2Props{
   parteSuperior: React.ReactNode;
   ParteIntermedia: React.ReactNode;
   parteInferior: React.ReactNode;
}
