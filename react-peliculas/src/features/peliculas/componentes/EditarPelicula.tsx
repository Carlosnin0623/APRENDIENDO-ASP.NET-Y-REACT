import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type PeliculaCreacion from "../modelos/PeliculaCreacion.model";
import FormularioPelicula from "./FormularioPelicula";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../componentesGlobales/Cargando";
import type Genero from "../../generos/modelos/Genero.model";
import type Cine from "../../cines/modelos/Cine.model";
import type ActorPelicula from "../modelos/ActorPelicula.model";

export default function EditarPelicula() {

  const [modelo, setModelo] = useState<PeliculaCreacion | undefined>(undefined)
  const { id } = useParams();


  useEffect(() => {
    setTimeout(() => {
      setModelo({ titulo: 'Avenders' + id, fechaLanzamiento: '2020-05-11', trailer: 'abc', poster: 'https://cdn.marvel.com/content/2x/avengersendgame_lob_mas_mob_01.jpg' })
    }, 500)

  }, [id]);

  const onSubmit: SubmitHandler<PeliculaCreacion> = async (data) => {
    console.log('Editando película...');
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log(data);
  }

  const generosSeleccionados: Genero[] = [
    { id: 2, nombre: 'Drama' }
  ];
  const generosNoSeleccionados: Genero[] = [
    { id: 1, nombre: 'Acción' },
    { id: 3, nombre: 'Conedia' }
  ]

  const cinesSeleccionados: Cine[] = [
    { id: 1, nombre: 'Agora', latitud: 0, longitud: 0}
  ];
  const cinesNoSeleccionados: Cine[] = [
    { id: 2, nombre: 'Sambil', latitud: 0, longitud: 0}
  ];

  const actoresSeleccionados: ActorPelicula[] = [
    {
      id: 1,
      nombre: 'Tom Holland',
      personaje: 'Spider-Man',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg/250px-Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg'
    },
  ]

  return (
    <>
      <h3>Editar Película</h3>
      {modelo ? <FormularioPelicula modelo={modelo} onSubmit={onSubmit}
      generosNoSeleccionados={generosNoSeleccionados}
      generosSeleccionados={generosSeleccionados}
      cinesSeleccionados={cinesSeleccionados}
      cinesNoSeleccionados={cinesNoSeleccionados}
      actoresSeleccionados={actoresSeleccionados}  /> : <Cargando />}
    </>

  )
}