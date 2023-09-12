const express = require('express'); // referencia a framework express
const app = express(); // se crea la aplicacion de express
const log = require('morgan'); // para saber los clientes conectaods
const bodyParser = require('body-parser');
const path= require('path');

const IndexRoutes = require('./routers/index.js'); 
const { default: mongoose } = require('mongoose');

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

//conectar a bd

mongoose.connect("mongodb+srv://tbotello73:bdtbote@cluster0.fbmoru0.mongodb.net/tienda?retryWrites=true&w=majority")
.then(bd=>console.log('BD conectada!'))
.catch(err=>console.log(err));


// establecer sistema de vistas 
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
//desplegar mensaje de conectado