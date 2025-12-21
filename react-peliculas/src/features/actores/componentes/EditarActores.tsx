import { useParams } from "react-router"

export default function EditarActores(){

const {id} = useParams();

return(
    <>
     <h3>Editar Actores</h3>
     <p>El id es: {id}</p>
    </>
   
)

}