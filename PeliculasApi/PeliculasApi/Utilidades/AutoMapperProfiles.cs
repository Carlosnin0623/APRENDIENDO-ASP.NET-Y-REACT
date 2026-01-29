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
    }
}
