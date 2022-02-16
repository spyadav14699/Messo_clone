const express = require("express");

const router = express.Router();

const Electronic = require("../model/electronic.model")




router.get("" ,  async (req, res) => {

    try {
        
     const electronics =  await Electronic.find().lean().exec();
 
 
     return res.send(electronics);
 
    } catch (e) {
        
     console.log(e.message)
    }
 
 })
 
 router.post("", async (req, res) => {
 
 try {
     const  electronic = await Electronic.create(req.body);
 
     return res.status(201).send(electronic)
 
 
 
 } catch (e) {
     console.log(e.message)
     
 }
 

 })
 
 

 module.exports = router;

