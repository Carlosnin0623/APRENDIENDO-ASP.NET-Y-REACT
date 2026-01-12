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
     opciones.DefaultExpirationTimeSpan = TimeSpan.FromSeconds(15); 
  }); 

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();

    
}

app.UseHttpsRedirection();

app.UseOutputCache();  // El app.UseOutputCache(); debe ir antes del app.UseAuthorization(); //

app.UseAuthorization();

app.MapControllers();

app.Run();
