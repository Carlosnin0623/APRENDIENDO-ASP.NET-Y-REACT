using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using PeliculasApi.Entidades;

namespace PeliculasApi.Controllers

{
    [Route("api/generos")]
    [ApiController]
    public class GenerosController : ControllerBase
    {
        [HttpGet]
        [HttpGet("Listado")] // Puedes tener variar rutas para la misma acción 
        [HttpGet("/Listado-generos")]
        [OutputCache] // Con esto ya le estamos agregando Cache a una de las peticiones https
        public List<Genero> Get() // Recibir datos o mostrar
        {
            var repositorio = new RepositorioEnMemoria();
            var generos = repositorio.ObtenerTodosLosGeneros();
            return generos;
        }

        /* [HttpGet("{id}/{nombre?}")] /* El simboolo ? significa que el nombre es opcional y no siempre debe estar presente */

        [HttpGet("{id:int}")]
        [OutputCache] // Con esto ya le estamos agregando Cache a una de las peticiones http
        public async Task<ActionResult<Genero>> Get(int id)  // api/generos/1
        {
            var repositorio = new RepositorioEnMemoria();
            var genero = await repositorio.ObtenerPorId(id);

            if(genero is null)
            {
                return NotFound();
            }

            return genero;
        }

        [HttpGet("{nombre}")]
        public async Task<ActionResult<Genero>>  Get(string nombre)  // api/generos/comedia
        {
            var repositorio = new RepositorioEnMemoria();
            var genero = await repositorio.ObtenerPorNombre(nombre);

            if(genero is null)
            {
                return NotFound();
            }

            return genero;
        }

        [HttpPost]
        public void Post([FromBody]Genero genero) // Enviar datos
        {

        }

        [HttpPut]
        public void Put() // Actualizar
        {

        }

        [HttpDelete]
        public void Delete() // Eliminar
        {

        }
    }
}
