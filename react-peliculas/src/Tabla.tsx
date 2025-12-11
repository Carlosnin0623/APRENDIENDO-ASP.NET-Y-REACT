import { useState } from "react";
import type Persona from "./Persona.model";
import Fila from "./Fila";

export default function Tabla() {

    const personasFuente: Persona[] = [

        { id: 1, nombre: 'Felipe', departamento: 'Ingenieria' },
        { id: 2, nombre: 'Claudia', departamento: 'Recursos Humanos' },
        { id: 3, nombre: 'Roberto', departamento: 'Contabilidad' },
        { id: 4, nombre: 'Francisca', departamento: 'Contabilidad' },
        { id: 5, nombre: 'Jose', departamento: 'Operaciones' },
        { id: 6, nombre: 'Estephany', departamento: 'Ingenieria' },
        { id: 7, nombre: 'Norberto', departamento: 'Recursos Humanos' },
    ]

    const [personas, setPersonas] = useState(personasFuente);

    const removerPersona = (persona: Persona) => {
        setPersonas(
            personas.filter(p => p.id !== persona.id)
        )

    }

    return (
        <>
            <br />
            <br />
            <table border={1}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Departamento</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {personas ? personas.map(p => <Fila key={p.id} persona={p} remover={removerPersona} />) : <p>'No hay valores en la tabla'</p>}
                </tbody>
            </table>

            {personas.length > 0 ? (
                <p>La cantidad de elementos es: {personas.length}</p>
            ) : (
                <p>No hay elementos para mostrar</p>
            )}
        </>
    )

}
