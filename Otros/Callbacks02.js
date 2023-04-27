function sumar(a,b,cb){
    let suma = a+b;
    // Como se puede observar llamaremos a una función callback que declaramos como genérica
    cb(suma);
}

// Función que utilizaremos para el callback
function imprimir(txt){
    console.log(`Resultado: ${txt}`)
}

//Llamamos a la función 
sumar(2,7,imprimir);

