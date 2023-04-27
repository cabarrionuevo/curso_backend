//Asincronismo con el uso de settimeout

function funcionCallback(){
    console.log('Saludo asincrono despues de 3 segundos')
}

//***IMPORTANTE****
// En este ejemplo es importante notar que si bien se hace una escritura secuencial
// de las distintas funciones y se podría esperar que la ejecución sea en el mismo orden.
// Esto no ocurre así, ¿Porque? porque la función setTimeout genera diferentes hilos de
// ejecución. Al ejecutar el código vas a ver que termina primero 3, luego 1 y finalmente 2

//1) Llamada a la primer funcion
setTimeout(funcionCallback, 3000);

//2) Llamada a una segunda función
setTimeout(() => console.log("Saludo asincrono despues de 4 segundos"), 4000);

//3) Llamada a una tercer funcion
setTimeout(function() {console.log('Saludo asincrono despues de 2 segundos')}, 2000);
