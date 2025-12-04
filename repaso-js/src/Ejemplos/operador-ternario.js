export default function OperadorTernarioEjemplo(){
  const edad = 21;

  let mensaje;

  if(edad >= 18){
    mensaje = "Eres mayor de edad";
  }else{
    mensaje = "Eres menor de edad";
  }

  // Asi seria usando el operador Ternario

  const edad2 = 15
   // EXPRESION BOOLEANA ? SENTENCIA-TRUE : SENTENCIA-FALSE
  let saludo = edad2 >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

  console.log(mensaje);
  console.log(saludo);

}