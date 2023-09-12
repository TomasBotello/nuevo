const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Venta= new Schema({
    productos : String,
    precio : String,
    iva : String
});

module.exports = mongoose.model('datos', Venta);