import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type PeliculaCreacion from "../modelos/PeliculaCreacion.model";
import FormularioPelicula from "./FormularioPelicula";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../componentesGlobales/Cargando";

export default function EditarPelicula(){
    
   const [modelo, setModelo] = useState<PeliculaCreacion | undefined>(undefined)
   const {id} = useParams();


   useEffect(() => {
     setTimeout(() => {
       setModelo({titulo: 'Avenders' + id, fechaLanzamiento: '2020-05-11', trailer: 'abc' , poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Avengers_on_E_9th.jpg/250px-Avengers_on_E_9th.jpg'})
     }, 500)  

   }, [id]);

    const onSubmit: SubmitHandler<PeliculaCreacion> = async(data) => {
           console.log('Editando película...');
           await new Promise(resolve => setTimeout(resolve, 500));
           console.log(data);
       }

    return(
        <>
        <h3>Editar Película</h3>
         {modelo ? <FormularioPelicula modelo={modelo} onSubmit={onSubmit} /> : <Cargando /> }
        </>
        
    )
}