using Microsoft.EntityFrameworkCore;
using PeliculasApi;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
//builder.Services.AddOpenApi();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// Servicio para la conexion con la base de datos 

builder.Services.AddDbContext<ApplicationDbContext>(opciones => 
opciones.UseSqlServer("name=DefaultConnection"));

/* Implementar Cache en la aplicación para guardar datos en memoria y retorne mas rapido la info AddOutputCache
   Esto siempre debe ir antes de app que es lo que inicializa el api  */

builder.Services.AddOutputCache(opciones => {

     // Esto es para espeficar el tiempo que durara la info en cache, debe ser un tiempo acorte de tu aplicacion
     opciones.DefaultExpirationTimeSpan = TimeSpan.FromSeconds(60); 
  });

var origenesPermitidos = builder.Configuration.GetValue<string>("origenesPermitidos")!.Split(",");

 // Los Cors son los que me permiten la conexion desde el navegador hacia mi servidor web
builder.Services.AddCors(opciones =>
{
    opciones.AddDefaultPolicy(opcionesCors =>
    {
        opcionesCors.WithOrigins(origenesPermitidos).AllowAnyMethod().AllowAnyHeader();
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();

    
}

/* Ejecutando Swagger en ambiente de produccion
app.UseSwagger();
app.UseSwaggerUI();

*/

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.UseOutputCache();  // El app.UseOutputCache(): Sirve para agregar cache a la aplicacion y debe ir antes del app.UseAuthorization();  //

app.Run();
