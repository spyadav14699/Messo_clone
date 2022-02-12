const express = require("express");

const router = express.Router();

const Jwellery = require("../model/jwellery.model")




router.get("" ,  async (req, res) => {

    try {
        
     const jwellerys =  await Jwellery.find().lean().exec();
 
 
     return res.send(jwellerys);
 
    } catch (e) {
        
     console.log(e.message)
    }
 
 })
 
 router.post("", async (req, res) => {
 
 try {
     const  jwellery = await Jwellery.create(req.body);
 
     return res.status(201).send(jwellery)
 
 
 
 } catch (e) {
     console.log(e.message)
     
 }
 

 })
 
 

 module.exports = router;

