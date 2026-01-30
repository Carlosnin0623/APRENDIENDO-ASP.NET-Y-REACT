
using Microsoft.EntityFrameworkCore;
using PeliculasApi.Entidades;

namespace PeliculasApi
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options): base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<PeliculaGenero>().HasKey(e => new { e.GeneroId, e.PeliculaId });
            modelBuilder.Entity<PeliculaCine>().HasKey(e => new { e.CineId, e.PeliculaId });
            modelBuilder.Entity<PeliculaActor>().HasKey(e => new { e.ActorId, e.PeliculaId });
        }

        public DbSet<Genero> Generos { get; set; } // Esta es la forma de crear la tabla y esta toma la estructura de la entidad Genero
        public DbSet<Actor> Actores { get; set; }
        public DbSet<Cine> Cines { get; set; }
        public DbSet<Pelicula> Peliculas { get; set; }
        public DbSet<PeliculaGenero> PeliculasGeneros { get;set; }
        public DbSet<PeliculaCine> PeliculasCine { get; set; }
        public DbSet<PeliculaActor> PeliculasActores { get; set; }


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
     *  PM> Remove-Migration: Elimina la migracion anterior
     *  
     */
}
