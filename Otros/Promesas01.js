
//Se crea un objeto de tipo promesa que recibe como parametro una función que recibe 2 parámetros
let miPromesa = new Promise((resolve,reject)=>{
    let exp = true;

    if(exp)
        resolve('Resolvio correctamente');
    else
        reject('Se produjo un error');
});

miPromesa.then( valor => console.log(valor)).catch(error => console.log(error));

