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
        private readonly ServicioTransient transient1;
        private readonly ServicioTransient transient2;
        private readonly ServicioScope scope1;
        private readonly ServicioScope scope2;
        private readonly ServicioSingleton singleton;
        private readonly IOutputCacheStore outputCacheStore;
        private readonly IConfiguration configuration;
        private const string cacheTag = "generos";

        public GenerosController(IRepositorio repositorio, 
            ServicioTransient transient1,
            ServicioTransient transient2, 
            ServicioScope scope1,
            ServicioScope scope2,
            ServicioSingleton singleton, 
            IOutputCacheStore outputCacheStore,
            IConfiguration configuration)
        {
            this.repositorio = repositorio;
            this.transient1 = transient1;
            this.transient2 = transient2;
            this.scope1 = scope1;
            this.scope2 = scope2;
            this.singleton = singleton;
            this.outputCacheStore = outputCacheStore;
            this.configuration = configuration;
        }

        [HttpGet("Ejemplo-proveedor-configuración")]
        public string GetEjemploProveedorConfiguracion()
        {
            return configuration.GetValue<string>("CadenaDeConexion")!;
        }

        [HttpGet("servicios-tiempos-de-vida")]
        public IActionResult GetServiciosTiempoDeVida()
        {
            return Ok(new
            {
                Transients = new { transient1 = transient1.ObtenerId, transient2 = transient2.ObtenerId },
                Scopeds = new {scope1 = scope1.ObtenerId, scope2 = scope2.ObtenerId},
                Singleton = singleton.ObtenerId
            });

        }

        [HttpGet]
        [HttpGet("Listado")] // Puedes tener variar rutas para la misma acción 
        [HttpGet("/Listado-generos")]
        [OutputCache(Tags = [cacheTag])] // Con esto ya le estamos agregando Cache a una de las peticiones https
        public List<Genero> Get() // Recibir datos o mostrar
        {
            var generos = repositorio.ObtenerTodosLosGeneros();
            return generos;
        }

        /* [HttpGet("{id}/{nombre?}")] /* El simboolo ? significa que el nombre es opcional y no siempre debe estar presente */

        [HttpGet("{id:int}")]
        [OutputCache(Tags = [cacheTag] )] // Con esto ya le estamos agregando Cache a una de las peticiones http
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
        public async Task<IActionResult> Post([FromBody]Genero genero) // Enviar datos
        {

            var yaExsite = repositorio.Existe(genero.Nombre);

            if (yaExsite)
            {
                return BadRequest($"Ya existe un género con el nombre {genero.Nombre}");
            }

            // Creando el genero

            repositorio.Crear(genero);
            await outputCacheStore.EvictByTagAsync(cacheTag, default);

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
