import type React from 'react';
import './App.css'
import { useState } from 'react';
import Cabezera from './Cabezera';
import MostrarTexto from './MostrarTexto';

export default function EjemploEstado() {


  console.log('renderizando el componente App');

  const manejarClick = () => alert('Haz hecho click en el boton');

  const [texto, setTexto] = useState('');

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => setTexto(e.currentTarget.value);

  return (
    <>
      <Cabezera/>
      <button onClick={manejarClick}>Haz click sobre mi</button>
      <div>
        <input onKeyUp={(e) => manejarKeyUp(e)}></input>
        <MostrarTexto texto={texto}/>
      </div>
    </>
  )

}