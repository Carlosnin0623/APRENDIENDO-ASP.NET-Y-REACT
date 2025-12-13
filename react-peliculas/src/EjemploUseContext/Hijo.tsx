import { useContext } from "react"
import valorContext from "./ValorContext"

export default function Hijo(){

    const valor = useContext(valorContext);

    return(
        <>
         <h3>Este es el componente Hijo. el valor es: {valor}</h3>
        </>
    )
}