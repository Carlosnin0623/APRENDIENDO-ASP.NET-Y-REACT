import type { SubmitHandler } from "react-hook-form";
import FormularioCine from "./FormularioCine";
import type Cinecreacion from "../modelos/CineCreacion.model";

export default function CrearCines() {

    const onSubmit: SubmitHandler<Cinecreacion> = async(data) => {
        console.log('Creando cine');
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(data);
    }

    return (
        <>
            <h3>Crear Cines</h3>
            <FormularioCine onSubmit={onSubmit}/>
        </>

    )

}