import { AsyncTypeahead } from "react-bootstrap-typeahead";
import type { Option } from "react-bootstrap-typeahead/types/types";
import type ActorPelicula from "../modelos/ActorPelicula.model";
import { useState } from "react";
import clienteAPI from "../../../api/clienteAxios";

export default function TypeaheadActores(props: TypeaheadActoresProps) {

  const [actores, setActores] = useState<ActorPelicula[]>([]);

  const [cargando, setCargando] = useState(false);


  function manejarBusqueda(query: string){
    setCargando(true);

    clienteAPI.get<ActorPelicula[]>(`/actores/${query}`)
    .then(res => {
       setActores(res.data);
       setCargando(false);
    })
  }

  // Mantén el typeahead "controlado": que siempre quede vacío tras seleccionar
  const seleccion: ActorPelicula[] = [];

  const [elementoArrastrado, setElementoArrastrado] = useState<ActorPelicula | undefined>(undefined);

  const manejarDragStart = (actor: ActorPelicula) => {
    setElementoArrastrado(actor)
  }

  const manejarDragOver = (actor: ActorPelicula) => {
     if(!elementoArrastrado || actor.id === elementoArrastrado.id){
         return
     }

     const actores = [...props.actores];
     const indiceDesde = actores.findIndex(x => x.id === elementoArrastrado.id);
     const indiceHasta = actores.findIndex(x => x.id === actor.id);

     if(indiceDesde !== -1 && indiceHasta !== -1){
        [actores[indiceDesde], actores[indiceHasta]] = [actores[indiceHasta], actores[indiceDesde]];
         props.onAdd(actores);

     }


  }

  const thumbStyle: React.CSSProperties = {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "6px",
    display: "block"
  };

  const menuThumbStyle: React.CSSProperties = {
    width: "64px",
    height: "64px",
    objectFit: "cover",
    borderRadius: "6px",
    marginRight: "10px",
    flex: "0 0 auto",
    display: "block"
  };


  return (
    <>
      <label>Actores</label>

      <AsyncTypeahead
        isLoading={cargando}
        onSearch={manejarBusqueda}
        id="typeahead-actores"
        options={actores}
        labelKey={(opcion: Option) => (opcion as ActorPelicula).nombre}
        filterBy={["nombre"]}
        placeholder="Escriba el nombre del actor..."
        minLength={2}
        flip
        selected={seleccion}
        onChange={(seleccionados: Option[]) => {
          const actorSeleccionado = seleccionados[0] as ActorPelicula;

          if(props.actores.findIndex(x => x.id === actorSeleccionado.id) === -1){
             actorSeleccionado.personaje = '';
             props.onAdd([...props.actores, actorSeleccionado]);
          }
           
        }}
        renderMenuItemChildren={(opcion: Option) => {
          const actor = opcion as ActorPelicula;
          return (
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                alt="imagen actor"
                src={actor.foto}
                style={menuThumbStyle}
              />
              <span>{actor.nombre}</span>
            </div>
          );
        }}
      />

      <ul className="list-group mt-2">
        {props.actores.map(actor => (
          <li
            draggable={true}
            onDragStart={() => manejarDragStart(actor)}
            onDragOver={() => manejarDragOver(actor)}
            className="list-group-item d-flex align-items-center"
            key={actor.id}
          >
            <div style={{ width: "70px" }}>
              <img
                src={actor.foto}
                alt="foto"
                style={thumbStyle}
              />
            </div>

            <div style={{ width: "150px", marginLeft: "1rem" }}>
              {actor.nombre}
            </div>

            <div className="flex-grow-1 mx-3">
              <input
                className="form-control"
                placeholder="Personaje"
                type="text"
                value={actor.personaje}
                onChange={(e) => props.onCambioPersonaje(actor.id, e.currentTarget.value)}
              />
            </div>

            <span
              role="button"
              className="badge text-bg-secondary"
              onClick={() => props.onRemove(actor)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

interface TypeaheadActoresProps {
  actores: ActorPelicula[];
  onAdd(actores: ActorPelicula[]): void;
  onCambioPersonaje(id: number, personaje: string): void;
  onRemove(actor: ActorPelicula): void;
}