const express = require('express'); // referencia a framework express
const app = express(); // se crea la aplicacion de express
const log = require('morgan'); // para saber los clientes conectaods
const bodyParser = require('body-parser');

const IndexRoutes = require('./routers/index.js'); 

app.set('port', process.env.PORT || 3000); //asigna el puerto 3000

//Midelware utiliza morgan
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended: false}));
//Rutas
app.use('/',IndexRoutes);

app.listen(app.get('port'),() => { 
    console.log('El servidor esta funcionando en el puerto', app.get('port')); 
}
);
//desplegar mensaje de conectado