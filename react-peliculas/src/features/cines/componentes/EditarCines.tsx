import { useParams } from "react-router"

export default function EditarCines(){

/* Use Params con este react Hook podemos obtener los id que llegan por la ruta
que creamos en nuestro archivo de rutas, la variable debe llamarse igual que el parametro que establecemos
por la URL para poder recibirlo bien

<Route path='/cines/editar/:id' element={<EditarCines />} />

*/
const {id} = useParams(); 

return(
    <>
    <h3>Editar Cines</h3>
    <p>El Id es: {id}</p>
    </>
    
)

}