import { useEffect, useState } from "react"

export default function EjemploUseEffect(){

const [clicks, setClicks] = useState(0);

const [hora, setHora] = useState(new Date());


useEffect(() => {
    console.log('El Componente ha sido cargado');

    return () => console.log('El componente ha sido desmontado'); // Esta funcion se lanzara cuando se destruya el componente
}, []); /* Esto indica que esta funcion se ejecutara solo al mostrar el componente y nada mas */


useEffect(() => {
    console.log('Hook del click cargado');
    document.title = `${clicks} veces`;

    return () => console.log('Hook click desmontado');
}, [clicks]) // esto indica que debe esperar que la variable clicks este cargada para que funcione

useEffect(() => {
    const timerId = setInterval(() => {
        setHora(new Date());
    }, 1000);

    return () => clearInterval(timerId);
}, [])

return(
    <>
     <h2>Ejemplo UseEffect</h2>
     <div>
        <button onClick={() => setClicks(clicks + 1) }>Me has clikeado {clicks} veces</button>
     </div>
     <div>
        La hora actual es: {hora.toTimeString()}
     </div>
    </>
)


}