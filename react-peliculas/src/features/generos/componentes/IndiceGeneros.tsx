import { useNavigate } from "react-router";
import Boton from "../../../componentesGlobales/Boton";
import { useEffect } from "react";
import clienteAPI from "../../../api/clienteAxios";

export default function IndiceGeneros() {

    const navigate = useNavigate();

    useEffect(() => {
        clienteAPI.get('/generos')
       .then(res => console.log(res.data))
    }, [])

    return (
        <>
            <h3>Géneros</h3>
            <Boton onClick={() => navigate('/generos/crear')}>Crear Género</Boton>
        </>
    )

}