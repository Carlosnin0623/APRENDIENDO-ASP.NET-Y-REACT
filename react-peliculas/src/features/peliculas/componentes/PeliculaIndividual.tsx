import { NavLink, useNavigate } from "react-router";
import Boton from "../../../componentesGlobales/Boton";
import type Pelicula from "../modelos/pelicula.model";
import style from './PeliculaIndividual.module.css'
import confirmar from "../../../utilidades/confirmar";
import clienteAPI from "../../../api/clienteAxios";
import { useContext } from "react";
import AlertaContext from "../utilidades/AlertaContex";

export default function PeliculaIndividual(props: PeliculaIndividualProps) {

  const contruirLink = (): string => `/peliculas/${props.pelicula.id}`;

  const navigate = useNavigate();

  const alerta = useContext(AlertaContext);

  const borrar = async (id: number) => {

    try {
      await clienteAPI.delete(`/peliculas/${id}`);
      alerta();
    } catch (err) {
      console.error(err)
    }

  }


  return (
    <div className={style.div}>
      <NavLink to={contruirLink()}>
        <img alt="poster" src={props.pelicula.poster}></img>
      </NavLink>
       
      <p>
        <NavLink to={contruirLink()}>{props.pelicula.titulo}</NavLink>
      </p>

      <div>
        <Boton onClick={() => navigate(`peliculas/editar/${props.pelicula.id}`)}>Editar</Boton>
        <Boton className="btn btn-danger ms-4" onClick={() => confirmar(() => borrar(props.pelicula.id) )}
        >Borrar</Boton>
      </div>
    </div>
  )


}

interface PeliculaIndividualProps {
  pelicula: Pelicula
}