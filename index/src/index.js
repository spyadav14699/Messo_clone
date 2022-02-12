const express = require("express")

const mongoose = require("mongoose")

const ElectronicController = require("./controller/electronic.controller")

const JwelleryController = require("./controller/jwellery.controller")

const KurtiController = require("./controller/kurti.controller")

const mensController = require("./controller/mens.controller")

const sariController = require("./controller/sari.controller")



const app = express()
app.use(express.json());

app.set('view-engine', 'ejs')




 
app.use("/electronic", ElectronicController);

app.use("/jwellery", JwelleryController)

app.use("/kurti", KurtiController)

app.use("/mens", mensController)

app.use("/sari", sariController)





app.get("/", (req, res) => {

    res.render('index.ejs')
})

app.get("/Sighn_up", (req, res) => {

    res.render('Sighnup.ejs')
})

app.get("/payment", (req, res) => {

    res.render('payment.ejs')
})

app.get("/cart", (req, res) => {

    res.render('cart.ejs')
})

app.get("/product", (req, res) => {

    res.render('product.ejs')
})

app.get("/product-jwellery", (req, res) => {

    res.render('product-jwellery.ejs')
})

app.get("/product-mens", (req, res) => {

    res.render('product-mens.ejs')
})
app.get("/product-kurti", (req, res) => {

    res.render('product-kurti.ejs')
})

app.get("/product-sari", (req, res) => {

    res.render('product-sari.ejs')
})







module.exports = app;






