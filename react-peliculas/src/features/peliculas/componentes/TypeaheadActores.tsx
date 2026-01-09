import { Typeahead } from "react-bootstrap-typeahead";
import type { Option } from "react-bootstrap-typeahead/types/types";
import type ActorPelicula from "../modelos/ActorPelicula.model";

export default function TypeaheadActores(){

    const actores: ActorPelicula[] = [
        {id: 1, nombre: 'Tom Holland', personaje: '', foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg/250px-Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg'},
        {id: 2, nombre: 'Marisa Tomei', personaje: '', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Marisa_Tomei_Photo_Op_GalaxyCon_Raleigh_2024_%28cropped%29.jpg/250px-Marisa_Tomei_Photo_Op_GalaxyCon_Raleigh_2024_%28cropped%29.jpg'},
        {id: 3, nombre: 'Tom Hanks', personaje: '', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg/250px-TomHanksPrincEdw031223_%2811_of_41%29_%28cropped%29.jpg'}
    ]

    const seleccion: ActorPelicula[] = [];




    return(
        <>
        <label>Actores</label>
        <Typeahead
         id="typeahead"
         onChange={(actores: Option[]) => {

         }}
         options={actores}
         labelKey={(opcion: Option) => {
            const actor = opcion as ActorPelicula;
            return actor.nombre
         }}

         filterBy={['nombre']}
         placeholder="Escriba el nombre del actor..."
         minLength={2}
         flip= {true}
         selected={seleccion}
         renderMenuItemChildren={(opcion: Option) => {
            const actor = opcion as ActorPelicula;
            return (
                <>
                 <img alt="Imagen Actor" src={actor.foto} style={{
                    height: '64px',
                    width: '64px',
                    marginRight: '10px'
                 }} />

                 <span>{actor.nombre}</span>
                </>
            )
         }}
        />
        </>
    )
}