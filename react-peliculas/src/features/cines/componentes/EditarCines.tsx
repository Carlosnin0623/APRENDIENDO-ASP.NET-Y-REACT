import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type Cinecreacion from "../modelos/CineCreacion.model";
import FormularioCine from "./FormularioCine";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../componentesGlobales/Cargando";

export default function EditarCines() {

    /* Use Params con este react Hook podemos obtener los id que llegan por la ruta
    que creamos en nuestro archivo de rutas, la variable debe llamarse igual que el parametro que establecemos
    por la URL para poder recibirlo bien
    
    <Route path='/cines/editar/:id' element={<EditarCines />} />
    
    */
    const { id } = useParams();

    const [modelo, setModelo] = useState<Cinecreacion | undefined>(undefined);

    useEffect(() => {
        setTimeout(() => {
            setModelo({ nombre: 'Sambil' });
        }, 1000)
    }, [id])

    const onSubmit: SubmitHandler<Cinecreacion> = async (data) => {
        console.log('Editando cine');
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(data);
    }

    return (
        <>
            <h3>Editar Cines</h3>
            {modelo ? <FormularioCine modelo={modelo} onSubmit={onSubmit} /> : <Cargando />}
        </>

    )

}