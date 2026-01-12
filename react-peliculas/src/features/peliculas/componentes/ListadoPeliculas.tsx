import type Pelicula from "../modelos/pelicula.model";
import PeliculaIndividual from "./PeliculaIndividual";
import style from './ListadoPeliculas.module.css';
import ListadoGenerico from "../../../componentesGlobales/ListadoGenerico";

export default function ListadoPeliculas(props: ListadoPeliculasProps) {

    return (
        <ListadoGenerico<Pelicula> listado={props.peliculas} listadoVacioUI={<><h3>No hay películas para mostrar</h3></>}>
            <div className={style.div}>
                {props.peliculas?.map(pelicula => <PeliculaIndividual key={pelicula.id} pelicula={pelicula} />)}
            </div>
        </ListadoGenerico>
    )
}


interface ListadoPeliculasProps {
    peliculas?: Pelicula[];
}