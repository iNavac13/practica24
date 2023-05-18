const express=require('express');   //dependencia express
const router=express.Router();  //creamos router
const mongoose=require('mongoose');   //dependencia mongoose
let Person=require('../models/persons');    //importamos el esquema person


router.get('/person',  (req, res) => {  //ruta person para agregar personas
    res.render('addPerson'); 
});

router.post('/displayPerson', (req, res) => {   
   const persona=Person({"nombre":req.body.nombre,"edad": req.body.edad, "nss": req.body.nss, "tipoSangre":req.body.tipoSangre}); 
    persona.save().then(()=>{res.redirect('gente')});

})

module.exports = router;