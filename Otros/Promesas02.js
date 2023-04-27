let promesa = new Promise( (resolver) => {
    setTimeout(() => {
        resolver("Mi promesa es que triunfaré y me convertiré en programador backend sr")
    }, 3000);
});

// Ejemplo 1), comentar 2) para que funcione
// promesa.then(valor => console.log(valor));

//***************************/
//*****Ejemplo con Async*****
//***************************/

//Al declarar la palabra async previo a una función indicamos que la misma retornará una promesa
async function funcionPrometedora(){
    return "Hola como estas soy una funcion prometedora";
}
//Ejemplo 2) comentar 3) para que funcione
// funcionPrometedora().then(valor => console.log(valor))

//***********************************/
//*****Ejemplo con Async y await*****
//***********************************/

async function funcionPrometedoraEmpoderada(){

    let promesita = new Promise( resolve => {
        resolve("Funcion Asyc que retorna una promesa que será esperada por await")
    });

    console.log(await promesita);

}
//Ejemplo 3) comentar 4) para que funcione
// funcionPrometedoraEmpoderada();

async function funcionPrometedoraEmpoderadaConTimeOut(){

    console.log("Inicio de la promesa");
    let promesita = new Promise( resolve => {
        setTimeout(()=>resolve("Funcion Async declara una promesa que recibe como parámetro una función con un timeout y será esperada por un await"), 5000);
    });
    console.log("Fin de la promesa");

    console.log(await promesita);
}


funcionPrometedoraEmpoderadaConTimeOut()
