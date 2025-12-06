export default function TemplateStringsEjemplo(){
    const nombre = 'Felipe Gavilán'; // Comillas simples
    const pais = "RD"; // Comillas dobles

    const saludo = `Mi nombre es ${nombre} y soy de ${pais}`; // usanto tildes (backticks) Alt + 96 
    console.log(saludo);

    const sumar = (a, b) => a + b;

    const mensaje = `Hola ${nombre}
    
    Esta es una carta
    
    La suma de 2 y 3 es ${sumar(2, 3)}

    Att: Yo`;

    console.log(mensaje);
}