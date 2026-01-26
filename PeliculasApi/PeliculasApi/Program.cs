using Microsoft.EntityFrameworkCore;
using PeliculasApi;
using PeliculasApi.Servicios;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
//builder.Services.AddOpenApi();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configurando servicio de AutoMapper

builder.Services.AddAutoMapper(typeof(Program));

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
        // Esta opcion WithOrigins(Direcciones permitidas) permite decidir que ip o direccion puede conectarse a nuestro web Api
        opcionesCors.WithOrigins(origenesPermitidos).AllowAnyMethod().AllowAnyHeader()
        .WithExposedHeaders("cantidad-total-registros");

        /* Esta opcion AllowAnyOrigin() permite todo el mundo pueda acceder a nuestro web api
          opcionesCors.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
        */
    });
});


builder.Services.AddTransient<IAlmacenadorArchivos, AlmacenadorArchivosLocal>();
builder.Services.AddHttpContextAccessor();


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

/* Ejecutando Swagger en ambiente de produccion
app.UseSwagger();
app.UseSwaggerUI();

*/

app.UseHttpsRedirection();

app.UseStaticFiles(); // Este servicio permite archivos estaticos como carpetas para guardar imagenes en nuestro disco

app.UseCors();  // El servicio app.UseCors() es el que permite la conexion desde el servidor de react con el de Asp.net

app.UseAuthorization();

app.MapControllers();

app.UseOutputCache();  // El app.UseOutputCache(): Sirve para agregar cache a la aplicacion y debe ir antes del app.UseAuthorization();  //

app.Run();
