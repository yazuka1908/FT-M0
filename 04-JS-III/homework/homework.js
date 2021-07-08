// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let listaNueva = [];
  
  for (let index = 0; index < array.length; index++) {
    let sumaUno = array[index] + 1;
    listaNueva.push(sumaUno);    
  }
    
 return listaNueva;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas (unidas)
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
 
  //let cadena = palabras.join(" ");

  let cadena = null;

  for (let ind = 0; ind < palabras.length; ind++) {
    
    if (cadena == null) {
      cadena = palabras[ind];
    } else {
      cadena = cadena + " " + palabras[ind];
    }

  }

  return cadena;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  //let seTieneElemento = array.include(elemento);

  for (let index = 0; index < array.length; index++) {
    if (elemento === array[index]) {
      return true;
    }
  }

  return false;
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  let sumando = 0;

  for (let index = 0; index < numeros.length; index++) {
    //sumando += numeros[index];
    sumando = sumando + numeros[index];
  }

  return sumando;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let sumando = 0;

  for (let index = 0; index < resultadosTest.length; index++) {
    sumando += resultadosTest[index];
  }

  let promedio = sumando / resultadosTest.length;
  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let numMayor = 0;

  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] > numMayor) {
      numMayor = numeros[index];
    }
  }

  return numMayor;
}

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  let tablaDelSeis = [];

  for (let index = 0; index <= 10; index++) {
    tablaDelSeis.push(6 * index);
  }

  return tablaDelSeis;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if (arguments.length < 1) {
    return 0;
  }
  let resultadoMultiplicador = 1;

  for (let index = 0; index < arguments.length; index++) {
    resultadoMultiplicador = resultadoMultiplicador * arguments[index];
  }

  return resultadoMultiplicador;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let totalConteo = 0;
  
  for (let index = 0; index < arreglo.length; index++) {
    if (arreglo[index] > 18) {
      totalConteo = totalConteo + 1;
    }
  }

  return totalConteo;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: "Es fin de semana"
  //si el día corresponde a Sábado o Domingo y "Es dia Laboral" en caso contrario.
  //Escribe tu código aquí:
  /* Solucion 1:
  if (numeroDeDia === 2,3,4,5,6) {
    return "Es dia Laboral";
  } else {
    return "Es fin de semana";
  }  
  */  
  
  if (numeroDeDia === 2 || numeroDeDia === 3 || numeroDeDia === 4 || numeroDeDia === 5 || numeroDeDia === 6) {
    return "Es dia Laboral";
  } else {
    return "Es fin de semana";
  }
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  /* Solucion 1:
  let num = n.toString()
  if (num.charAt(0) === "9"){
    return true;
  }
  return false;  
  */
  
  let sustraer =  String(n).substring(0,1);
  let volverNumero = Number(sustraer);
  
  if (volverNumero === 9){
      return true;
  }
  
  return false;
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  /* Solucion 1:
  for (var i =0 ; i < arreglo.length - 1; i++) {
    if(arreglo[i] !== arreglo[i+1]){
      return false
    }
  }
  return true  
  */

  let primerDato = arreglo[0];
  let contTodosIguales = 0;
  
  for (let index1 = 0; index1 < arreglo.length; index1++) {
    if (primerDato === arreglo[index1]){
      contTodosIguales++;
    }
  }

  if (contTodosIguales === arreglo.length){
    return true;
  }

  return false;
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevaLista = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] === "Enero" || array[index] === "Marzo" || array[index] === "Noviembre"){
      nuevaLista.push(array[index]);
    }    
  }

  if (nuevaLista.length === 3){
    return nuevaLista;
  }

  return "No se encontraron los meses pedidos";
}

function mayorACien(array) {
  //1. (Entendimiento)La función recibe un array con enteros entre 0 y 200. 
  //2. Recorrer el array y guardar en un nuevo array 
  //3. sólo los valores mayores a 100 (no incluye el 100). 
  //Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > 100){
      nuevoArray.push(array[index]);
    }
  }

  return nuevoArray;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var sumando = numero;
  var listaNueva = [];
  var bandera = false;
  
  for (var index = 0; index < 10; index++) {
    sumando = sumando + 2;
    
    if (sumando === index){
      bandera = true;
      break;
    } else {
      listaNueva.push(sumando);
    }
  }
  
  if (bandera === true) {
    return "Se interrumpió la ejecución";
  } else {
    return listaNueva;
  }
  
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var sumando = numero;
  var listaNueva = [];
  
  for (var index = 0; index < 10; index++) {
    if (index === 5){
      continue;
    }
    
    sumando = sumando + 2;
    listaNueva.push(sumando);    
  }
  
  return listaNueva;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  tablaDelSeis,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
