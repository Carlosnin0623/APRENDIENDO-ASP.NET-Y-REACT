import type { SubmitHandler } from "react-hook-form";
import FormularioActor from "./FormularioActor";
import type ActorCreacion from "../modelos/ActorCreacion.model";

export default function CrearActores() {

    const onSubmit: SubmitHandler<ActorCreacion> = async (data) => {
        console.log('Creando actores');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }

    return (
        <>
            <h3>Crear Actores</h3>
            <FormularioActor onSubmit={onSubmit} />
        </>

    )

}