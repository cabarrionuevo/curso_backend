const express = require('express');

const app = express();

//Forma (1) - desde el navegador con la url raiz + styles.css podes acceder al archivo. Ejemplo: http://localhost:3000/styles.css
// app.use(express.static('assets'));

//Forma (2) - desde el navegador con la url raiz + /publicos/styles.css podes acceder al archivo. Ejemplo: http://localhost:3000/assets/styles.css
app.use('/publicos',express.static('assets'));

app.get('/',function(req,res){
    //A diferencia de una respuesta simple en la que se envía por ejemplo un texto que se utiliza el método 'send'
    //acá como enviamos un documento, utilizamos el método 'sendfile'
    res.sendFile('index.html',{
        root:__dirname
    });
})

app.listen(3000);