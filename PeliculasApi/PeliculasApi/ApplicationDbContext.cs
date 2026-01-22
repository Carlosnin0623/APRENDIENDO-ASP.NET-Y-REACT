
using Microsoft.EntityFrameworkCore;
using PeliculasApi.Entidades;

namespace PeliculasApi
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options): base(options)
        {
            
        }

        public DbSet<Genero> Generos { get; set; } // Esta es la forma de crear la tabla y esta toma la estructura de la entidad Genero


    }

    /* Pasos para crear una base de datos usando Entity FrameCore 
     *  En la barra superior entrar a Herramientas o Tools
     *  Luego en Administrador de Paquetes de Nuggest
     *  Seleccionar Consola del Administrador de Paquetes
     *  
     *  Para crear la tabla en la base de datos usamos 
     *  
     *  PM> Add-Migration TablaGeneros Esto creara un archivo llamado Migration en Visual Studio que contedra las tablas
     *  PM> Update-Database -- Creara la base de datos si no existe y si existe la actualizara
     *  
     */
}
