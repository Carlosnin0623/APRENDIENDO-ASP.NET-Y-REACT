using PeliculasApi;
using PeliculasApi.Interfaz;
using PeliculasApi.Repositorios;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
//builder.Services.AddOpenApi();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

/* Implementar Cache en la aplicación para guardar datos en memoria y retorne mas rapido la info AddOutputCache
   Esto siempre debe ir antes de app que es lo que inicializa el api  */

builder.Services.AddOutputCache(opciones => {

     // Esto es para espeficar el tiempo que durara la info en cache, debe ser un tiempo acorte de tu aplicacion
     opciones.DefaultExpirationTimeSpan = TimeSpan.FromSeconds(60); 
  });

/* Configurando servicio IRepostorio para aplicar la inversion de Dependencia 
   IRepositorio: Es es servicio
   RepositorioEnMemoria: Es la implementacion de ese servicio
 */

builder.Services.AddSingleton<IRepositorio, RepositorioEnMemoria>();

/* Ejemplo de los 3 tipos de servicios disponible en C# */

// Servicio Transient o servicio transitorio
builder.Services.AddTransient<ServicioTransient>();

// Servicio Scope o Servicio de alcanse

builder.Services.AddScoped<ServicioScope>();

// Servicio Singleton o Solitario

builder.Services.AddSingleton<ServicioSingleton>();


var app = builder.Build();

// Configure the HTTP request pipeline.
/* Esto es si queremos usar swagger en modo desarrollo como ves esta condiciona que se ejecute solo es modo de desarrollo
if (app.Environment.IsDevelopment())
{
    //app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();

    
}
*/

/* De esta forma desplegamos swagger a produccion 
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
*/

// De esta forma lo ponemos en modo de produccion
//app.UseSwagger();
//app.UseSwaggerUI();

/* Ahora ponemos swagger en modo desarrollo otra vez */

if (app.Environment.IsDevelopment())
{
    //app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseOutputCache();  // El app.UseOutputCache(): Sirve para agregar cache a la aplicacion y debe ir antes del app.UseAuthorization();  //

app.UseAuthorization();

app.MapControllers();

app.Run();
