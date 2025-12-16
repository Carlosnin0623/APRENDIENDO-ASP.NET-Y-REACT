import { useContext } from "react";
import Padre from "./Padre";
import valorContext from "./ValorContext";

export default function Abuelo(){

    const valor = useContext(valorContext);

    return(
        <>
         <h3>Este es el componente Abuelo. el valor es: {valor}</h3>
         <Padre />
        </>
    )
}