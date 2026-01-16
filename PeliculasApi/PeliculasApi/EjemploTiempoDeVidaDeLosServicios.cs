namespace PeliculasApi
{
    public class ServicioTransient
    {
        private readonly Guid _id;

        public ServicioTransient()
        {
            _id = Guid.NewGuid();
        }

        public Guid ObtenerId => _id;

    }
}
