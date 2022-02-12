const express = require("express");

const router = express.Router();

const Kurti = require("../model/kurti.model")




router.get("" ,  async (req, res) => {

    try {
        
     const kurtis =  await Kurti.find().lean().exec();
 
 
     return res.send(kurtis);
 
    } catch (e) {
        
     console.log(e.message)
    }
 
 })
 
 router.post("", async (req, res) => {
 
 try {
     const  kurti = await Kurti.create(req.body);
 
     return res.status(201).send(kurti)
 
 
 
 } catch (e) {
     console.log(e.message)
     
 }
 

 })
 
 

 module.exports = router;

