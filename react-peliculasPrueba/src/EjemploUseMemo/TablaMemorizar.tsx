import { memo, useCallback, useState } from "react";
import type Persona from "./Persona.model";
import FilaMemorizar from "./FilaMemorizar";
import { ErrorBoundary } from "react-error-boundary";
;

const TablaMemorizar = memo(function TablaMemorizar() {


    console.log('Renderizando el componente Tabla');

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

    const removerPersona = useCallback((persona: Persona) => {
        setPersonas(estadoActual => estadoActual.filter(p => p.id !== persona.id));
    }, []);

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
                    {personas.map(p =>
                        <ErrorBoundary key={p.id} fallback=
                        {
                        <>
                         <tr>
                            <td colSpan={3} style={{color:"red"}}>--Error: {p.nombre}</td>
                         </tr>
                        </>
                        }>
                        <FilaMemorizar key={p.id} persona={p} remover={removerPersona} />
                        </ErrorBoundary>
                    )}
                </tbody>
            </table>

            {personas.length > 0 ? (
                <p>La cantidad de elementos es: {personas.length}</p>
            ) : (
                <p>No hay elementos para mostrar</p>
            )}
        </>
    )

});

export default TablaMemorizar