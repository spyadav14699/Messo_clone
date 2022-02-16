const express = require("express");

const router = express.Router();

const Mens = require("../model/mens.model")




router.get("" ,  async (req, res) => {

    try {
        
     const mens =  await Mens.find().lean().exec();
 
 
     return res.send(mens);
 
    } catch (e) {
        
     console.log(e.message)
    }
 
 })
 
 router.post("", async (req, res) => {
 
 try {
     const  men = await Mens.create(req.body);
 
     return res.status(201).send(men)
 
 
 
 } catch (e) {
     console.log(e.message)
     
 }
 

 })
 
 

 module.exports = router;

