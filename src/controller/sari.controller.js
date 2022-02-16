const express = require("express");

const router = express.Router();

const Sari = require("../model/sari.model")




router.get("" ,  async (req, res) => {

    try {
        
     const saris =  await Sari.find().lean().exec();
 
 
     return res.send(saris);
 
    } catch (e) {
        
     console.log(e.message)
    }
 
 })
 
 router.post("", async (req, res) => {
 
 try {
     const  sari = await Sari.create(req.body);
 
     return res.status(201).send(sari)
 
 
 
 } catch (e) {
     console.log(e.message)
     
 }
 

 })
 
 

 module.exports = router;

