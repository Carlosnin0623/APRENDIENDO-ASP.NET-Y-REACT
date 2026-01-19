using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using Microsoft.EntityFrameworkCore;
using PeliculasApi.DTOs;
using PeliculasApi.Entidades;

namespace PeliculasApi.Controllers

{
    [Route("api/generos")]
    [ApiController]

    public class GenerosController : ControllerBase
    {  
        
        private readonly IOutputCacheStore outputCacheStore;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private const string cacheTag = "generos";

        public GenerosController(
            // Servicios
            IOutputCacheStore outputCacheStore, 
            ApplicationDbContext context,
            IMapper mapper)
        {
            this.outputCacheStore = outputCacheStore;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        [OutputCache(Tags = [cacheTag])] // Con esto ya le estamos agregando Cache a una de las peticiones https
        public async Task<List<GeneroDTO>> Get() // Recibir datos o mostrar
        {
            return await context.Generos.ProjectTo<GeneroDTO>(mapper.ConfigurationProvider).ToListAsync();
        }

        /* [HttpGet("{id}/{nombre?}")] /* El simbolo ? significa que el nombre es opcional y no siempre debe estar presente */

        [HttpGet("{id:int}", Name = "ObtenerGeneroPorId")]
        [OutputCache(Tags = [cacheTag] )] // Con esto ya le estamos agregando Cache a una de las peticiones http
        public async Task<ActionResult<GeneroDTO>> Get(int id)  // api/generos/1
        {
            throw new NotImplementedException();
        }

        
        [HttpPost] // Enviar datos al servidor
        public async Task<IActionResult> Post([FromBody]GeneroCreacionDTO generoCreacionDTO) // Enviar datos
        {
            var genero = mapper.Map<Genero>(generoCreacionDTO);
            context.Add(genero);
            await context.SaveChangesAsync();
            return CreatedAtRoute("ObtenerGeneroPorId", new { id = genero.Id }, genero);
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
