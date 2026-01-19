using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using PeliculasApi.Entidades;

namespace PeliculasApi.Controllers

{
    [Route("api/generos")]
    [ApiController]

    public class GenerosController : ControllerBase
    {  
        
        private readonly IOutputCacheStore outputCacheStore;
        private const string cacheTag = "generos";

        public GenerosController(
            IOutputCacheStore outputCacheStore,
            IConfiguration configuration)
        {
            this.outputCacheStore = outputCacheStore;
        }

        [HttpGet]
        [OutputCache(Tags = [cacheTag])] // Con esto ya le estamos agregando Cache a una de las peticiones https
        public List<Genero> Get() // Recibir datos o mostrar
        {
            return new List<Genero>() { new Genero { Id = 1, Nombre = "Comedia" },
                new Genero { Id = 2, Nombre = "Acción" }};
        }

        /* [HttpGet("{id}/{nombre?}")] /* El simboolo ? significa que el nombre es opcional y no siempre debe estar presente */

        [HttpGet("{id:int}")]
        [OutputCache(Tags = [cacheTag] )] // Con esto ya le estamos agregando Cache a una de las peticiones http
        public async Task<ActionResult<Genero>> Get(int id)  // api/generos/1
        {
            throw new NotImplementedException();
        }

        
        [HttpPost] // Enviar datos al servidor
        public async Task<IActionResult> Post([FromBody]Genero genero) // Enviar datos
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        public void Put() // Actualizar
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public void Delete() // Eliminar
        {
            throw new NotImplementedException();
        }
    }
}
