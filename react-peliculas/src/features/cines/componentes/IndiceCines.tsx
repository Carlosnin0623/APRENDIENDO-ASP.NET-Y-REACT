import { useNavigate } from "react-router";
import Boton from "../../../componentesGlobales/Boton";

export default function IndiceCines(){

     const navigate = useNavigate();
    return(
        <>
        <h3>Cines</h3>
        <Boton onClick={() => navigate('/actores/crear')}>Crear Cine</Boton>
        </>
        
    )

}