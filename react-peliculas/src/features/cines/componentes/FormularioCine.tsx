import { useForm, type SubmitHandler } from "react-hook-form";
import type Cinecreacion from "../modelos/CineCreacion.model"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { primeraLetraMayuscula } from "../../../validaciones/Validaciones";
import Boton from "../../../componentesGlobales/Boton";
import { NavLink } from "react-router";
import Mapa from "../../../componentesGlobales/Mapa/Mapa";
import type Coordenada from "../../../componentesGlobales/Mapa/Coordenada.model";
import MostrarErrores from "../../../componentesGlobales/MostrarErrores";

export default function FormularioCine(props: FormularioCineProps) {

    const { register, handleSubmit,
        setValue,
        formState: { errors, isValid, isSubmitting } } = useForm<Cinecreacion>({
        resolver: yupResolver(reglasDeValidacion),
        mode: 'onChange',
        defaultValues: props.modelo ?? { nombre: '' }
    });

    function transformarCoordenadas() : Coordenada[] | undefined {
        if(props.modelo){
            const respuesta: Coordenada = {
                lat: props.modelo.latitud,
                lng: props.modelo.longitud
            }

            return [respuesta];
        }

        return undefined
    }

    return (
        <>
            <MostrarErrores errores={props.errores} />
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" className="form-control" autoComplete="off"
                        {...register('nombre')}
                    />
                    {errors.nombre && <p className="error">{errors.nombre.message}</p>}
                </div>

                <div className="mt-4">
                   <Mapa 
                    coordenadas={transformarCoordenadas()}
                    LugarSeleccionado={coordenada => {
                     setValue('latitud', coordenada.lat, {
                        shouldValidate: true
                     });

                      setValue('longitud', coordenada.lng, {
                        shouldValidate: true
                     });
                   }}/>
                </div>

                <div className="mt-2">
                    <Boton type="submit" disabled={!isValid || isSubmitting}>{isSubmitting ? 'Enviando...' : 'Enviar'}</Boton>
                    <NavLink to="/cines" className="btn btn-secondary ms-2">Cancelar</NavLink>
                </div>
            </form>
        </>
    )


}

interface FormularioCineProps {
    modelo?: Cinecreacion;
    onSubmit: SubmitHandler<Cinecreacion>;
    errores: string[];
}

const reglasDeValidacion = yup.object({
    nombre: yup.string().required('El nombre es obligatorio').test(primeraLetraMayuscula()),
    latitud: yup.number().required(),
    longitud: yup.number().required(),
})

