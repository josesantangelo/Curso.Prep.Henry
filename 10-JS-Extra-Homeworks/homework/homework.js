// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
    // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
    // un par clave-valor en forma de matriz.
    //Ejemplo: 
    /*objeto({
        D: 1,
        B: 2,
        C: 3
      }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
    let toArray = Object.entries(objeto);
    return toArray;
}


function numberOfCharacters(string) {
    //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
    //Escribe tu código aquí
    let toArrayX = Array.from(string);
    let mapeado = toArrayX.map(letra => [letra, string.split(letra).length - 1]);
    let obj = Object.fromEntries(mapeado);
    debugger;
    return obj;




}


function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyHENRY -> HENRYsoy
    //Escribe tu código aquí
    var minus = '';
    var mayus = '';
    let toArray0 = s.split('');
    debugger;
    for (let i = 0; i < toArray0.length; i++) {
        if (toArray0[i] === toArray0[i].toUpperCase()) {
            mayus = mayus + toArray0[i];
        } else {
            minus = minus + toArray0[i];
        }
    }
    debugger;
    // var minusStr = minus.join('');
    // var mayusStr = mayus.join('');
    return mayus + minus;
}


function asAmirror(str) {
    //La función recibe una frase. 
    //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
    //pero con cada una de sus palabras invertidas, como si fuera un espejo.
    //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
    //Escribe tu código aquí

    let array = str.split(' ');

    var result = array.map(element => {
        return element = element.split('').reverse().join('')
    });

    return result.join(' ');

    // let toArray3 = str.split(' ');
    // let toArray4 = Array.from(toArray3);
    // let toArray5 = toArray4.map(x => Array.from(x));
    // for (let i = 0; i < toArray5.length; i++) {
    //     toArray5[i] = toArray5[i].reverse();
    // }
    // // let toString1;
    // // for (let i = 0; i < toArray5.length; i++) {
    // //     if (toArray5[i] === ',') {
    // //         continue;
    // //     } else {
    // //         toString1 = toString1 + toArray5[i];
    // //     }

    // // }
    // // return toString1;
    // let toString1 = toArray5.join(' ');
    // return toString1;


}


function capicua(numero) {
    //Escribe una función, la cual recibe un número y determina si es o no capicúa.
    //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
    //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
    //Escribe tu código aquí
    let num = String(numero);
    debugger;
    let toArray6 = Array.from(num);
    debugger;
    let reves2 = toArray6.reverse();
    debugger;
    if (reves2.join('') === num) {
        return "Es capicua";
    } else {
        return "No es capicua";
    }
}


function deleteAbc(cadena) {
    //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
    //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
    //Escribe tu código aquí
    let nuevaCadena = '';
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c') {
            continue;
        } else {
            nuevaCadena = nuevaCadena + cadena[i];
        }

    }
    return nuevaCadena;
}


function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí
    let arrMenorMayor = arr.sort(function(prev, next) {
        if (prev.length > next.length) {
            return 1;
        }
        if (prev.length < next.length) {
            return -1;
        }
        return 0;
    });
    return arrMenorMayor;

}


function buscoInterseccion(arreglo1, arreglo2) {
    //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
    //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
    //Si no tienen elementos en común, retornar un arreglo vacío.
    //Aclaración: los arreglos no necesariamente tienen la misma longitud
    //Escribe tu código aquí:

    var comunes = [];

    arreglo1.forEach(element1 => {
        arreglo2.forEach(element2 => {
            if (element1 === element2) {
                comunes.push(element1);
                return;
            }
        });


    });
    return comunes;
    // for (let i = 0; i < suma.length; i++) {
    //     if (suma[i + 1] === suma[i]) {
    //         comunes.push(suma[i]);
    //     }

    // }
    // return comunes;
    // for (i = 0; i < suma.length; i++) {
    //     if (suma[i + 1] === suma[i]) {
    //         comunes = comunes + suma[i];
    //         debugger;
    //     }
    // }
    // return comunes;
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