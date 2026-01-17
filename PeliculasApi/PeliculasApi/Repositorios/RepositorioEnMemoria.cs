using PeliculasApi.Entidades;
using PeliculasApi.Interfaz;
using System.Security.Authentication.ExtendedProtection;

namespace PeliculasApi.Repositorios
{
    public class RepositorioEnMemoria : IRepositorio
    {
        private List<Genero> _generos;

        public RepositorioEnMemoria()
        {
            _generos = new List<Genero>
            {
                new Genero{Id = 1, Nombre = "Comedia"},
                new Genero{Id = 2, Nombre = "Acción"},
                new Genero{Id = 3, Nombre = "Drama"},
            };

        }

        public List<Genero> ObtenerTodosLosGeneros()
        {
            return _generos;
        }

        public async Task<Genero> ObtenerPorId(int id)
        {
            await Task.Delay(TimeSpan.FromSeconds(3));
            return _generos.FirstOrDefault(g => g.Id == id);
        }

        public async Task<Genero> ObtenerPorNombre(string nombre)
        {
            await Task.Delay(TimeSpan.FromSeconds(3));
            return _generos.FirstOrDefault(g => g.Nombre == nombre);
        }

        public void Crear(Genero genero)
        {
            _generos.Add(genero);
        }

        public bool Existe (string nombre)
        {
            return _generos.Any(g => g.Nombre == nombre);
        }

        // Si tenemos que retornar un metodo void y debe ser asincrono debemos hacerlo de esta forma no poder void como retorno

        /*
        public async Task LoguearEnConsola()
        {
            await Task.Delay(TimeSpan.FromSeconds(3));
            // Loquemos la consola
        }

        */
    }
}
