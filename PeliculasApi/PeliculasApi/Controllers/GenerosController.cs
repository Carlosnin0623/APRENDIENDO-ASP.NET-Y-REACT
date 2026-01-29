using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using Microsoft.EntityFrameworkCore;
using PeliculasApi.DTOs;
using PeliculasApi.Entidades;
using PeliculasApi.Utilidades;
using System.Threading.Tasks;

namespace PeliculasApi.Controllers

{
    [Route("api/generos")]
    [ApiController]

    public class GenerosController : CustomBaseController
    {
        private readonly IOutputCacheStore outputCacheStore;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private const string cacheTag = "generos";

        public GenerosController(
            IOutputCacheStore outputCacheStore,
            ApplicationDbContext context, 
            IMapper mapper)
            :base(context, mapper, outputCacheStore, cacheTag)
        {
           
            this.outputCacheStore = outputCacheStore;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        [OutputCache(Tags = [cacheTag])] // Con esto ya le estamos agregando Cache a una de las peticiones https
        public async Task<List<GeneroDTO>> Get([FromQuery] PaginacionDTO paginacion) // Recibir datos o mostrar
        {
            // Esto es para paginar los registros de la tabla generos //
            return await Get<Genero, GeneroDTO>(paginacion, ordenarPor: g => g.Nombre);
        }

        /* [HttpGet("{id}/{nombre?}")] /* El simboolo ? significa que el nombre es opcional y no siempre debe estar presente */

        [HttpGet("{id:int}", Name ="ObtenerGeneroPorId")]
        [OutputCache(Tags = [cacheTag] )] // Con esto ya le estamos agregando Cache a una de las peticiones http
        public async Task<ActionResult<GeneroDTO>> Get(int id)  // api/generos/1
        {
            return await Get<Genero, GeneroDTO>(id);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]GeneroCreacionDTO generoCreacionDTO) // Enviar datos
        {
            return await Post<GeneroCreacionDTO, Genero, GeneroDTO>(generoCreacionDTO, "ObtenerGeneroId");
        }

        [HttpPut("{id:int}")] // Actualizar
        public async Task<IActionResult> Put(int id, [FromBody] GeneroCreacionDTO generoCreacionDTO) // Actualizar
        {
            return await Put<GeneroCreacionDTO, Genero>(id, generoCreacionDTO);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id) // Eliminar
        {
            return await Delete<Genero>(id);
        }
    }
}
