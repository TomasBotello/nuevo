const express = require('express');
const router = express.Router();
const model = require('../models/ventas.js')();
const Venta = require('..models/ventas.js');

router.get('/', async (req, res) =>{
    const datos = await Venta.find();
    console.log(datos);
    res.render('index.ejs', {
        datos
    });
});

router.get('/',(req,res)=>{
    res.render('index.ejs')
})

module.exports = router;