let reloj = () => {
    // Llamada al objeto date de JS
    let fecha = new Date();
    console.log(`Hora: ${fecha.getHours()}\nMinutos: ${fecha.getMinutes()} \nSegundos: ${fecha.getSeconds()} \n\n`);
}

setInterval(reloj, 2000);
