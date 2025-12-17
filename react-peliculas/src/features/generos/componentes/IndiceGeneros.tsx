import { useNavigate } from "react-router";
import Boton from "../../../componentesGlobales/Boton";

export default function IndiceGeneros() {

    const navigate = useNavigate();

    return (
        <>
            <h3>Géneros</h3>
            <Boton onClick={() => navigate('/generos/crear')}>Crear Género</Boton>
        </>
    )

}