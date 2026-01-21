export default function MostrarErrores(Props: MostrarErroresProps) {
    return (
        <>
           <ul className="error">
               {Props.errores.map(err => <li key={err}>{err}</li>)}
           </ul>
        </>
    )
}

interface MostrarErroresProps {
    errores: string[];
}