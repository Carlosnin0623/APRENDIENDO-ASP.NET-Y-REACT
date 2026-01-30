using AutoMapper;
using NetTopologySuite.Geometries;
using PeliculasApi.DTOs;
using PeliculasApi.Entidades;

namespace PeliculasApi.Utilidades
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles(GeometryFactory geometryFactory)
        {
            ConfigurarMapeosGeneros();
            ConfigurarMapeosActores();
            ConfigurarMapeosCines(geometryFactory);
        }

        private void ConfigurarMapeosGeneros()
        {
            CreateMap<GeneroCreacionDTO, Genero>();
            CreateMap<Genero, GeneroDTO>();
        }

        private void ConfigurarMapeosActores()
        {
            CreateMap<ActorCreacionDTO, Actor>()
                .ForMember(x => x.Foto, opciones => opciones.Ignore());

            CreateMap<Actor, ActorDTO>();

            CreateMap<Actor, PeliculaActorDTO>();
        }

        private void ConfigurarMapeosCines(GeometryFactory geometryFactory)
        {
            CreateMap<Cine, CineDTO>()
                .ForMember(x => x.Latitud, cine => cine.MapFrom(p => p.Ubicacion.Y))
                .ForMember(x => x.Longitud, cine => cine.MapFrom(p => p.Ubicacion.X));

            CreateMap<CineCreacionDTO, Cine>()
                .ForMember(x => x.Ubicacion, CineDTO => CineDTO.MapFrom(p =>
                geometryFactory.CreatePoint(new Coordinate(p.Longitud, p.Latitud))));
        }

        private void ConfigurarMapeoPeliculas()
        {
            CreateMap<PeliculaCreacionDTO, Pelicula>()
                .ForMember(x => x.Poster, opciones => opciones.Ignore())
                .ForMember(x => x.PeliculasGeneros, dto =>
                dto.MapFrom(p => p.GenerosIds!.Select(id => new PeliculaGenero { GeneroId = id })))
                .ForMember(x => x.PeliculasCines, dto =>
                dto.MapFrom(p => p.CinesIds!.Select(id => new PeliculaCine { PeliculaId = id })))
                .ForMember(x => x.PeliculasActores, dto =>
                dto.MapFrom(p => p.Actores!.Select(actor =>
                new PeliculaActor { ActorId = actor.Id, Personaje = actor.Personaje })));

            CreateMap<Pelicula, PeliculaDTO>();
        }
    }
}
