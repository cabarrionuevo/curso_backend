const http = require('http');

function responderPeticion(request,response){
    response.end('Hola Mundo');
}

// La funcion createserver cada vez que manda a llamar a la funcion responderPeticion le pasa automaticamente los 2 argumentos
let server = http.createServer(responderPeticion);

server.listen(3000);