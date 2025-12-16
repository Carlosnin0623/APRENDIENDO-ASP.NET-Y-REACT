import type React from "react";
import Cargando from "./Cargando";

export default function ListadoGenerico<T>(props: ListadoGenericoProps<T>) {

    if (!props.listado) {
        return props.cargandoUI ? props.cargandoUI : <Cargando />;
    }
    else if (props.listado.length === 0) {
        return props.listadoVacioUI ? props.listadoVacioUI : 'No existen elementos para mostrar';
    }

    else {
       return props.children;
    }

}


/* La <T> Significa Type y nos permitira recibir cualquier tipo de clase esto es util
cuando queremos crear un componete como una lista, se me puede reutilizar en varios compontentes
como por ejemplo un listado de actores, peliculas, cines etc, no esta atado a una clase
en particular */

interface ListadoGenericoProps<T> {
    listado?: T[];
    children: React.ReactNode;
    listadoVacioUI?: React.ReactNode;
    cargandoUI?: React.ReactNode;
}