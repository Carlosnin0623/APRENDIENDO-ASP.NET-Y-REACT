using PeliculasApi.Validaciones;
using System.ComponentModel.DataAnnotations;

namespace PeliculasApi.Entidades
{
    public class Genero
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [StringLength(15, ErrorMessage = "El campo {0} debe tener {1} caracteres o menos ")]
        [PrimeraLetraMayuscula] // Validaciones Personalizas por atributos las validaciones se encuentran en la carpeta Validaciones
        public required string Nombre { get; set; }





        /* Validaciones de prueba
        [Range(18, 120, ErrorMessage ="La edad mínima del campo {0} es {1}")]

        public int Edad { get; set; }

        [CreditCard]
        public string? TarjetaDeCredito { get; set; }

        [Url]
        public string? Url { get; set; }

        */

    }
}
