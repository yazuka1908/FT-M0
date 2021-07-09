// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let nuevaMatriz = [];
  
  for (let llaveObj in objeto){
    // tomo llave y valor
    let llave = llaveObj;
    let valor = objeto[llaveObj];
    // Creo y agrego lista de fila y columna de matriz
    let nuevoObjMatriz = [];
    nuevoObjMatriz.push(llave); 
    nuevoObjMatriz.push(valor);
    // Agrego objeto a matriz
    nuevaMatriz.push(nuevoObjMatriz);
  }
  
  //console.log(nuevaMatriz);
  return nuevaMatriz;  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let respuestaNumeroCaracteres = {};
  let longitudCadena = string.length;

  // "adsjfdsfsfjsdjfhacabcsbajda" Primer For  
  // "adsjfdsfsfjsdjfhacabcsbajda" Segundo For

  // For para desglozar cadena
  for (let index = 0; index < longitudCadena; index++) {
    let caracter = string.charAt(index);
    let conteoCaracter = 0; 

    // For para contar el numero de veces del caracter en cadena
    for (let regString = 0; regString < longitudCadena; regString++) {
      let caracterObtenido = string.charAt(regString);
      
      // Cuento solo si existe y soy igual
      if (caracter === caracterObtenido){
        conteoCaracter = conteoCaracter + 1;
      }
    } 
    
    // Almaceno mi respuesta por Clave - Valor
    respuestaNumeroCaracteres[caracter] = conteoCaracter;
  }
  
  //console.log("OBJETO ==>",respuestaNumeroCaracteres);
  return respuestaNumeroCaracteres;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let corregirCadena = null;
  let longitudCadena = s.length;
  let cadenaMayuscula = "";
  let cadenaMiniscula = "";

  // soyHENRY
  // Mayus ==> HENRY
  // Minus ==> soy

  // For para recorres los caracteres de la cadena String
  for (let index = 0; index < longitudCadena; index++) {
    let caracter = s.charAt(index);
    
    // Evalua si el caracter inicial es igual al transformado en mayuscula, sino es minuscula
    if (caracter === caracter.toUpperCase()){
      cadenaMayuscula = cadenaMayuscula + caracter;
    } else{
      cadenaMiniscula = cadenaMiniscula + caracter;
    }
  }
  
  // Concateno primero parte mayuzcula y luego minuscula
  corregirCadena = cadenaMayuscula + cadenaMiniscula;

  return corregirCadena;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

