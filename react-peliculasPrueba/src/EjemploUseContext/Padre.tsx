import { useContext } from "react";
import Hijo from "./Hijo";
import valorContext from "./ValorContext";

export default function Padre(){

    const valor = useContext(valorContext);

    return(
        <>
        <h3>Este es el componente Padre. el valor es: {valor}</h3>
        <Hijo />
        </>
    )
}