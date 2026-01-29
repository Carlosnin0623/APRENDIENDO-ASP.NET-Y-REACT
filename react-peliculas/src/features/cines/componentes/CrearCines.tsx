import type { SubmitHandler } from "react-hook-form";
import FormularioCine from "./FormularioCine";
import type Cinecreacion from "../modelos/CineCreacion.model";
import { useNavigate } from "react-router";
import { useState } from "react";
import clienteAPI from "../../../api/clienteAxios";
import { extraerErrores } from "../../../utilidades/extraerErrores";
import type { AxiosError } from "axios";

export default function CrearCines() {

    const navigate = useNavigate();

    const [errores, setErrores] = useState<string[]>([]);

    const onSubmit: SubmitHandler<Cinecreacion> = async (data) => {
        try {
            await clienteAPI.post('/cines', data);
            navigate('/cines');
        } catch (err) {
            const errores = extraerErrores(err as AxiosError);
            setErrores(errores);
        }
    }

    return (
        <>
            <h3>Crear Cines</h3>
            <FormularioCine errores={errores} onSubmit={onSubmit} />
        </>

    )

}