using PeliculasApi.Entidades;
using System.Threading.Tasks;

namespace PeliculasApi.Interfaz
{
    public interface IRepositorio
    {
        List<Genero> ObtenerTodosLosGeneros();

        Task<Genero?> ObtenerPorId(int id);

        Task<Genero?> ObtenerPorNombre(string  nombre);
        void Crear(Genero genero);

        bool Existe(string nombre);
        
    }
}
