namespace PeliculasApi.Utilidades
{
    public static class HttpContextExtensions
    {
      public async static Task InsertarParametrosPaginacionEnCabezera<T>(this HttpContext httpContext, 
          IQueryable<T> queryable)
        {

        }
    }
}
