import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import type Cinecreacion from "../modelos/CineCreacion.model";
import FormularioCine from "./FormularioCine";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../componentesGlobales/Cargando";
import clienteAPI from "../../../api/clienteAxios";
import type Cine from "../modelos/Cine.model";
import { extraerErrores } from "../../../utilidades/extraerErrores";
import type { AxiosError } from "axios";

export default function EditarCines() {

    /* Use Params con este react Hook podemos obtener los id que llegan por la ruta
    que creamos en nuestro archivo de rutas, la variable debe llamarse igual que el parametro que establecemos
    por la URL para poder recibirlo bien
    
    <Route path='/cines/editar/:id' element={<EditarCines />} />
    
    */
    const { id } = useParams();

    const [modelo, setModelo] = useState<Cinecreacion | undefined>(undefined);

    const navigate = useNavigate();

    const [errores, setErrores] = useState<string[]>([]);

    useEffect(() => {
        clienteAPI.get<Cine>(`/cines/${id}`).then(res => setModelo(res.data))
        .catch(() => navigate('/cines'))

    }, [id, navigate]);
    

    const onSubmit: SubmitHandler<Cinecreacion> = async (data) => {
        try{
            await clienteAPI.put(`/cines/${id}`, data);
            navigate('/cines');
        }catch(err){
             const errores = extraerErrores(err as AxiosError);
             setErrores(errores);
        }
    }

    return (
        <>
            <h3>Editar Cines</h3>
            {modelo ? <FormularioCine errores={errores} modelo={modelo} onSubmit={onSubmit} /> : <Cargando />}
        </>

    )

}