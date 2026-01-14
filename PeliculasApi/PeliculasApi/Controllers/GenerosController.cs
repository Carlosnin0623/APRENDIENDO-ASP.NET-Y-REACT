using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using PeliculasApi.Entidades;
using PeliculasApi.Interfaz;

namespace PeliculasApi.Controllers

{
    [Route("api/generos")]
    [ApiController]

    public class GenerosController : ControllerBase
    {
        private readonly IRepositorio repositorio; // Inyeccion de dependencia
        public GenerosController(IRepositorio repositorio)
        {
            this.repositorio = repositorio;
        }

        [HttpGet]
        [HttpGet("Listado")] // Puedes tener variar rutas para la misma acción 
        [HttpGet("/Listado-generos")]
        [OutputCache] // Con esto ya le estamos agregando Cache a una de las peticiones https
        public List<Genero> Get() // Recibir datos o mostrar
        {
            var generos = repositorio.ObtenerTodosLosGeneros();
            return generos;
        }

        /* [HttpGet("{id}/{nombre?}")] /* El simboolo ? significa que el nombre es opcional y no siempre debe estar presente */

        [HttpGet("{id:int}")]
        [OutputCache] // Con esto ya le estamos agregando Cache a una de las peticiones http
        public async Task<ActionResult<Genero>> Get(int id)  // api/generos/1
        {
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

            var genero = await repositorio.ObtenerPorNombre(nombre);

            if(genero is null)
            {
                return NotFound();
            }

            return genero;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Genero genero) // Enviar datos
        {

            var yaExsite = repositorio.Existe(genero.Nombre);

            if (yaExsite)
            {
                return BadRequest($"Ya existe un género con el nombre {genero.Nombre}");
            }

            return Ok();
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
