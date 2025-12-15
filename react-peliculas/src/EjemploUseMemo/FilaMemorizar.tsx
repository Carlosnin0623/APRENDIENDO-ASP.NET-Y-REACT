import { memo } from "react";
import type Persona from "./Persona.model";

const FilaMemorizar = memo(function FilaMemorizar({persona, remover} : FilaProps) {

   console.log(`Cargar fila de ${persona.nombre}`);

   if(persona.nombre === 'Roberto'){
      throw Error();
   }
    return (
        <>
            <tr>
                <td>{persona.nombre}</td>
                <td>{persona.departamento}</td>
                <td>
                    <button>Editar</button>
                    <span>   </span>
                    <button onClick={() => remover(persona)}>Remover</button>
                </td>
            </tr>
        </>
    )
});

interface FilaProps {
    persona: Persona;
    remover: (p: Persona) => void;
}

export default FilaMemorizar;