const express = require('express');
const router = express.Router();
const model = require('../models/datos')();
const Venta = require('../models/datos');

router.get('/', async (req, res) =>{
    const datos = await Venta.find();
    console.log("los datos son".datos);
    res.render('index.ejs',{
        datos
    });
});

router.post('/add',async (req,res) =>{
    const valor = new Venta(req.body);
    console.log(req.body);
    await valor.save();
    res.redirect('/');
});

router.get('/del/id', async (req,res) =>{
    const {id} = req.params;
    await valor.findByIdAndRemove();
    res.redirect('/');
});

module.exports = router;