import Boton from "../../../componentesGlobales/Boton";
import type Pelicula from "../modelos/pelicula.model";
import './PeliculaIndividual.css'

export default function PeliculaIndividual(props: PeliculaIndividualProps) {

  const contruirLink = (): string => `/pelicula/${props.pelicula.id}`;

  return (
    <div className="div">
      <a href={contruirLink()}>
        <img alt="poster" src={props.pelicula.poster}></img>
      </a>
      <p>
        <a href={contruirLink()}>{props.pelicula.titulo}</a>
      </p>
      <Boton> Mi Boton de Pruebas</Boton>
    </div>
  )


}

interface PeliculaIndividualProps {
  pelicula: Pelicula
}