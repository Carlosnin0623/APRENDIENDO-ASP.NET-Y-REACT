import type Persona from "./Persona.model";

export default function Fila({persona, remover} : FilaProps) {
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
}

interface FilaProps {
    persona: Persona;
    remover: (p: Persona) => void;
}