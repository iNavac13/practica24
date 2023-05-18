const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
let Person=require('../models/persons');


router.get('/findById/:id',  (req, res) => {
    Person.findById(req.params.id)
    .then((myPerson)=>{res.render('personUpdate', {myPerson})})
    .catch((error)=>{res.json({message: error})})
});


module.exports = router;