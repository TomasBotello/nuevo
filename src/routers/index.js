const express = require('express');
const router = express.Router();
const Venta = require('../models/datos');

router.get('/', async (req, res) =>{
    const datos = await Venta.find();
    console.log("los datos son", datos);
    res.render('index.ejs', {
        datos
    });
});

router.post('/add', async (req, res) => {
    const valor = new Venta(req.body);
    console.log(req.body);
    await valor.save();
    res.redirect('/');
});

router.get('/del/:id', async (req, res) => {
    const { id } = req.params;
    await Venta.findByIdAndRemove(id);
    //res.status(200).send('El producto se eliminó correctamente');
    res.redirect('/');

});

router.post('/upd/:id', async (req, res) => {
    const { id } = req.params;
    const producto = req.body;

    await Venta.findByIdAndUpdate(id, producto);
    res.redirect('/');
});



module.exports = router;
