const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Venta = new Schema({
    producto: String,
    precio: String,
    iva: String,
    descripcion: String
});

Venta.methods.update = async function (data) {
    await this.updateOne({ _id: this._id }, data);
};

module.exports = mongoose.model('datos', Venta);