namespace PeliculasApi.Entidades
{
    public class PeliculaGenero
    {
        public int GeneroId { get; set; }
        public int PeliculaId { get; set; }
        public Genero Genero { get; set; } = null!; // Estas son propiedades de navegacion
        public Pelicula Pelicula { get; set; } = null!;
    }
}
