const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
let Person=require('../models/persons');

router.get('/gente',async (req,res)=>{
    let data = await Person.find({}); 
    res.render('index', {data})
});

router.post('/updatePerson',async (req,res)=>{
    Person.findByIdAndUpdate(req.body.objId,{
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    })
    .then((data)=>{res.redirect('/gente')})
    .catch((error=>{res.json({message: error})}))
});

router.get('/removePerson/:id', (req, res)=>{ 
    Person.findByIdAndDelete(req.params.id)
    .then(()=>{res.redirect('/gente')})
    .catch((err)=>{res.json({message:err});})
})

router.post('/find',async (req,res)=>{ 
    let data = await Person.find({"nombre":new RegExp(req.body.nombre,"i")});
    res.render('find', {data});
})
module.exports=router;