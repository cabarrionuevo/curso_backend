
// Ejemplo 1
const suma = (a,b,cb) =>{
    cb(a+b);
}

suma(1,2,(resultado)=>{
    console.log(resultado);
})

//Ejemplo 2 

const areaCuadrado = (base,altura,cb)=>{
    cb(base*altura);
}

areaCuadrado(5,5,(area_calculada)=>{
    console.log(area_calculada);
})

//Ejemplo 3

const calcularArea = (cb) => {
    console.log("Hola")
    setTimeout(()=>{
        cb(2,5)
    },10000);
    console.log("Chau")
}

const areaTriangulo = (param1,param2) => {console.log("El area del triangulo es: ",(param1*param2)/2)}

calcularArea(areaTriangulo);




