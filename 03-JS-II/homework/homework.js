// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  /* 
  if (x > y){
    return x;
  } else if (y > x){
    return y;
  } else {
    return x;
  }
  */

  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else if (x === y) {
    return x;
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  /*
  if (edad >= 18){
    return "Allowed";
  } else {
    return "Not allowed";
  }*/

  if (edad >= 18) {
    return "Allowed";
  } else if (edad < 18) {
    return "Not allowed";
  }
}

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  //1. Cuando el estado es igual a 1, el usuario está "Online"
  //2. Cuando el estado es igual a 2, el usuario está "Away"
  //3. De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.

  // punto 1.
  if (status === 1) {
    return "Online";

    // punto 2.
  } else if (status === 2) {
    return "Away";

    // punto 3.
  } else {
    return "Offline";
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // 1. Si idioma es "aleman", devuelve "Guten Tag!"
  // Si idioma es "mandarin", devuelve "Ni Hao!"
  // Si idioma es "ingles", devuelve "Hello!"
  // Si idioma no es ninguno de los anteriores o es `undefined` devuelve "Hola!"
  // Tu código:

  if (idioma === "aleman") {
    return "Guten Tag!";
  } else if (idioma === "mandarin") {
    return "Ni Hao!";
  } else if (idioma === "ingles") {
    return "Hello!";
  } else {
    return "Hola!";
  }
}

/*
Para implementar la siguiente función vamos a utilizar una estructura de control de flujo nueva, 
llamada switch, si no estás familiarizado con esta estructura, es un buen escenario para hacerle 
una visita al mejor amigo del programador, INTERNET! 
En la carrera del desarrollador constantemente es necesario recurrir a los recursos que nos 
proporciona la web (Google, YouTube, MDN, Stack Overflow, y muchos más) en búsqueda de las 
herramientas necesarias para resolver los distintos problemas que nos enfrentamos, por lo que 
aprender a realizar estas búsquedas en internet es uno de los skill más importantes que puedes 
adquirir!
En tu buscador basta con simplemente escribir "switch Javascript" y listo. Éxitos!
*/
function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var respuestaColor = "";

  switch (color) {
    case "blue":
      respuestaColor = "This is blue";
      break;
    case "red":
      respuestaColor = "This is red";
      break;
    case "green":
      respuestaColor = "This is green";
      break;
    case "orange":
      respuestaColor = "This is orange";
      break;
    default:
      respuestaColor = "Color not found";
      break;
  }

  return respuestaColor;
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 || numero === 5) {
    return true;
  }

  return false;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20) {
    return true;
  }

  return false;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (numero - Math.floor(numero) === 0) {
    return true;
  }

  return false;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // De lo contrario, devuelve el numero

  if (numero % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz";
  } else if (numero % 3 === 0) {
    return "fizz";
  } else if (numero % 5 === 0) {
    return "buzz";
  } else {
    return numero;
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  //1. Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //2. Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //3. Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //4. 0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //5. Si no se cumplen ninguna de las condiciones anteriores, retornar false.

  // punto 2
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  }

  // punto 4
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  }

  // punto 1
  if (num1 > num2 && num1 > num3 && num1 > 0) {
    return "Número 1 es mayor y positivo";
  }

  // punto 3
  if (num3 > num2 && num3 > num2) {
    var suma = num3 + 1;
    return suma;
  }

  // punto 5
  return false;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero > 1) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor) {
    return "Soy verdadero";
  } else {
    return "Soy falso";
  }
}

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero > 99 && numero < 1000) {
    return true;
  } else {
    return false;
  }
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let valorAumentado = numero;
  let contador = 1;
  do {
    valorAumentado = valorAumentado + 5;
    contador = contador + 1;
  } while (contador <= 8);

  return valorAumentado;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile,
};
