import type Persona from "./Persona.model";

export default function Fila(props: FilaProps) {
    return (
        <>
            <tr>
                <td>{props.persona.nombre}</td>
                <td>{props.persona.departamento}</td>
                <td>
                    <button>Editar</button>
                    <span>   </span>
                    <button onClick={() => props.remover(props.persona)}>Remover</button>
                </td>
            </tr>
        </>
    )
}


interface FilaProps {
    persona: Persona;
    remover: (p: Persona) => void;
}