import { useMemo, useState } from "react"

export default function EjemploMemorizar(){

    const [numero, setNumero] = useState(1);

    const [nombre, setNombre] = useState('');

    const factorial = useMemo(() => {
        console.log('Calculando factorial');
        let resultado = 1;
        for(let i = 1; i <= numero; i++){
            resultado = resultado * i;
        }

        return resultado;
    }, [numero]) // Esto solo se va a renderizar cuando la variable numero cambie si no no se renderiza optimizando memoria
       
    return(
      <>
      <p>Calcular el factorial de <input type="number" onChange={e => setNumero(Number(e.target.value))}></input> </p>

      <p>El factorial de {numero} es: {factorial}</p>

      <p>Nombre: <input type="text" onChange={e => setNombre(e.target.value)}></input></p>

      <p>Hola, {nombre}</p>
      </>
    )

}