import Cabezera from "./Cabezera";
import ProyectarContenido from "./ProyectarContenido";
import ProyectarContenido2 from "./ProyectarContenido2";

export default function MostrarContenido() {

    return (
        <>
            <h2>Ejemplo 1</h2>
            <ProyectarContenido>
                <>
                    <button onClick={() => alert('Haz hecho click al boton')}>Clikeame</button>
                    <h4>Este es un h4</h4>
                </>
            </ProyectarContenido>

            <h2>Ejemplo 2</h2>
            <ProyectarContenido2
                parteSuperior={<button>Botón superior</button>}
                ParteIntermedia={
                    <>
                        <Cabezera />
                        <p>Lo que yo quiera</p>
                    </>
                }
                parteInferior={
                    <>
                        <Cabezera />
                        <p>Lo que yo quiera 2</p>
                    </>}
                />
            </>
    )
}