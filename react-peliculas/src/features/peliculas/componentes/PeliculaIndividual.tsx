import type Pelicula from "../modelos/pelicula.model";
import style from './PeliculaIndividual.module.css'

export default function PeliculaIndividual(props: PeliculaIndividualProps) {

  const contruirLink = (): string => `/pelicula/${props.pelicula.id}`;


  return (
    <div className={style.div}>
      <a href={contruirLink()}>
        <img alt="poster" src={props.pelicula.poster}></img>
      </a>
      <p>
        <a href={contruirLink()}>{props.pelicula.titulo}</a>
      </p>
    </div>
  )


}

interface PeliculaIndividualProps {
  pelicula: Pelicula
}