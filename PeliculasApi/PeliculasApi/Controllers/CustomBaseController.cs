using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using Microsoft.EntityFrameworkCore;
using PeliculasApi.DTOs;
using PeliculasApi.Entidades;
using PeliculasApi.Utilidades;
using System.Linq.Expressions;

namespace PeliculasApi.Controllers
{
    public class CustomBaseController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IOutputCacheStore outputCacheStore;
        private readonly string cacheTag;

        public CustomBaseController(ApplicationDbContext context, IMapper mapper, IOutputCacheStore outputCacheStore, string cacheTag)
        {
            this.context = context;
            this.mapper = mapper;
            this.outputCacheStore = outputCacheStore;
            this.cacheTag = cacheTag;
        }


        protected async Task<List<TDTO>> Get<TEntidad, TDTO>(Expression<Func<TEntidad, Object>> ordenarPor)
           where TEntidad : class  // Restricction para especificar que TEntidad debe ser un clase
        {
             return await context.Set<TEntidad>()
               .OrderBy(ordenarPor) // Para ordenar ascendentemente y OrderByDescending(g => g.Id) // Para ordenar decendientemente
               .ProjectTo<TDTO>(mapper.ConfigurationProvider).ToListAsync();

        }

        protected async Task<List<TDTO>> Get<TEntidad, TDTO>(PaginacionDTO paginacion, Expression<Func<TEntidad, Object>> ordenarPor)
            where TEntidad : class  // Restricction para especificar que TEntidad debe ser un clase
        {
            var queryable = context.Set<TEntidad>().AsQueryable();
            await HttpContext.InsertarParametrosPaginacionEnCabezera(queryable);
            return await queryable
               .OrderBy(ordenarPor) // Para ordenar ascendentemente y OrderByDescending(g => g.Id) // Para ordenar decendientemente
               .Paginar(paginacion)
               .ProjectTo<TDTO>(mapper.ConfigurationProvider).ToListAsync();

        }

        protected async Task<ActionResult<TDTO>> Get<TEntidad, TDTO>(int id)
            where TEntidad: class, IId  // Restricction para especificar que TEntidad debe ser un clase
            where TDTO : IId
        {
            var entidad = await context.Set<TEntidad>()
                .ProjectTo<TDTO>(mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(x => x.Id  == id);

            if(entidad is null)
            {
                return NotFound();
            }

            return entidad;
        }

        protected async Task<IActionResult> Post<TCreacionDTO, TEntidad, TDTO>(TCreacionDTO creacionDTO, string nombreRuta)
            where TEntidad : class, IId
        {
            var entidad = mapper.Map<TEntidad>(creacionDTO);
            context.Add(entidad);
            await context.SaveChangesAsync();
            await outputCacheStore.EvictByTagAsync(cacheTag, default);

            var entidadDTO = mapper.Map<TDTO>(entidad);

            return CreatedAtRoute(nombreRuta, new { id = entidad.Id }, entidadDTO);

        }

        protected async Task<IActionResult> Put<TCreacionDTO, TEntidad>(int id, TCreacionDTO creacionDTO)
            where TEntidad : class, IId
        {
            var entidadExiste = await context.Set<TEntidad>().AnyAsync(g => g.Id == id);

            if (!entidadExiste)
            {
                return NotFound();
            }

            var entidad = mapper.Map<TEntidad>(creacionDTO);
            entidad.Id = id;

            context.Update(entidad);
            await context.SaveChangesAsync();
            await outputCacheStore.EvictByTagAsync(cacheTag, default);

            return NoContent();
        }

        protected async Task<IActionResult> Delete<TEntidad>(int id)
            where TEntidad : class, IId
        {

            var registrosBorrados = await context.Set<TEntidad>().Where(g => g.Id == id).ExecuteDeleteAsync();

            if (registrosBorrados == 0)
            {
                return NotFound();
            }

            await outputCacheStore.EvictByTagAsync(cacheTag, default);
            return NoContent();
        }
    }
}
