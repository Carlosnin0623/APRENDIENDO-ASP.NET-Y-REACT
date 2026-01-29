using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
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

        public CustomBaseController(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
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
    }
}
