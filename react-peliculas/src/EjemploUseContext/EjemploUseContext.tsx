import Abuelo from "./Abuelo";
import valorContext from "./ValorContext";

export default function EjemploUseContext(){

    const texto = 'El texto que deseo pasar 2';

    return(
        <>
         <valorContext.Provider value={texto}>
            <Abuelo />
         </valorContext.Provider> 
        </>
    )


}