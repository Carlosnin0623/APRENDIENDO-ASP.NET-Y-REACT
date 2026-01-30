using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using Microsoft.EntityFrameworkCore;
using PeliculasApi.DTOs;
using PeliculasApi.Entidades;
using PeliculasApi.Servicios;
using PeliculasApi.Utilidades;

namespace PeliculasApi.Controllers
{
    [Route("api/actores")]
    [ApiController]
    public class ActoresController : CustomBaseController
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IOutputCacheStore outputCacheStore;
        private readonly IAlmacenadorArchivos almacenadorArchivos;
        private const string cacheTag = "actores";
        private readonly string contenedor = "actores";

        public ActoresController(ApplicationDbContext context, IMapper mapper, IOutputCacheStore outputCacheStore,
            IAlmacenadorArchivos almacenadorArchivos)
            :base(context, mapper, outputCacheStore, cacheTag)
        {
            this.context = context;
            this.mapper = mapper;
            this.outputCacheStore = outputCacheStore;
            this.almacenadorArchivos = almacenadorArchivos;
        }

        [HttpGet]
        [OutputCache(Tags = [cacheTag])]
        public async Task<List<ActorDTO>> Get([FromQuery] PaginacionDTO paginacion)
        {
            return await Get<Actor, ActorDTO>(paginacion, ordenarPor: g => g.Nombre);
        }

        [HttpGet("{id:int}", Name = "ObtenerActorPorId")]
        [OutputCache(Tags = [cacheTag])]
        public async Task<ActionResult<ActorDTO>> Get(int id)
        {
            // throw new NotImplementedException();

            return await Get<Actor, ActorDTO>(id);
        }

        [HttpGet("{nombre}")]
        public async Task<List<PeliculaActorDTO>> Get(string nombre)
        {
            return await context.Actores.Where(a => a.Nombre.Contains(nombre))
                .ProjectTo<PeliculaActorDTO>(mapper.ConfigurationProvider)
                .ToListAsync();

        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] ActorCreacionDTO actorCreacionDTO)  //En este caso usamos FromForm ya que vamos a recibir un archivo o imagen si no vamos a recibir archivo, entonces debemos usar formBody en el post
        {
            var actor = mapper.Map<Actor>(actorCreacionDTO);

            if(actorCreacionDTO.Foto is not null)
            {
                var url = await almacenadorArchivos.Almacenar(contenedor, actorCreacionDTO.Foto);
                actor.Foto = url;
            }

            context.Add(actor);
            await context.SaveChangesAsync();
            await outputCacheStore.EvictByTagAsync(cacheTag, default);

            var actorDTO = mapper.Map<ActorDTO>(actor);

            return CreatedAtRoute("ObtenerActorPorId", new { id = actor.Id }, actorDTO);

        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Put(int id, [FromForm] ActorCreacionDTO actorCreacionDTO)
        {
            var actor = await context.Actores.FirstOrDefaultAsync(a => a.Id == id);

            if(actor is null)
            {
                return NotFound();
            }

            actor = mapper.Map(actorCreacionDTO, actor);

            if(actorCreacionDTO.Foto is not null)
            {
                actor.Foto = await almacenadorArchivos.Editar(actor.Foto, contenedor, actorCreacionDTO.Foto);

            }

            await context.SaveChangesAsync();
            await outputCacheStore.EvictByTagAsync(cacheTag, default);

            return NoContent();
        }

        [HttpDelete("{id:int}")]

        public async Task <IActionResult> Delete(int id)
        {
            return await Delete<Actor>(id);
        }

    }
}
