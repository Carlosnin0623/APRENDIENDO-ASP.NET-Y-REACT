using System.Security.Cryptography;

namespace PeliculasApi
{
    public class ServicioTransient
    {
        /* 
          Comportamiento:

          Se crea una nueva instancia cada vez que se solicita

          Siempre tendrá un Guid diferente

          Ejemplo mental:

          Cada vez que alguien pide este servicio → se crea uno nuevo

          Cuándo usarlo:

          Servicios livianos

          Lógica simple

          Sin estado compartido
         
         */

        private readonly Guid _id;

        public ServicioTransient()
        {
            _id = Guid.NewGuid();
        }

        public Guid ObtenerId => _id;

    }

    public class ServicioScope
    {
        /* 
         * Comportamiento:

           Se crea una sola vez por petición HTTP

           Dentro de la misma request: siempre tendrá el mismo Guid

           En otra request: Se crea uno nuevo

           Ejemplo mental:

           Una instancia por cada llamada al API

           Cuándo usarlo:

           Acceso a base de datos

           Unit of Work

          Servicios que comparten datos durante una petición
         */

        private readonly Guid _id;

        public ServicioScope()
        {
            _id = Guid.NewGuid();
        }

        public Guid ObtenerId => _id;

    }

    public class ServicioSingleton
    {
        /*
         Comportamiento:

         Se crea una sola vez en toda la aplicación

         Siempre devuelve el mismo Guid

         Vive mientras la app esté ejecutándose

         Ejemplo mental:

         Una sola instancia para todos y para siempre (hasta que se reinicie la app)

         Cuándo usarlo:

         Cache

         Configuraciones

         Servicios sin estado mutable

         Logging
         
         */
        private readonly Guid _id;

        public ServicioSingleton()
        {
            _id = Guid.NewGuid();
        }

        public Guid ObtenerId => _id;

    }


}