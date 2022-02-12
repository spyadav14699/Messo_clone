

const mongoose = require("mongoose")

const electronicSchema = new mongoose.Schema({
    img1 : {type:String, required : true},
    Name : {type: String,  required: true},
    Main_price : {type:String, required: true},
    Discount : {type:String, required: true},
    p : {type:String, required: true},
    img2 : {type:String, required: false},
    img3 : {type:String, required: false},
    img4 : {type:String, required: false},
    delivery : {type:String, required: true}
    


},
{
    versionKey:false,
    timestamps:true 
}
);

module.exports = mongoose.model("electronic", electronicSchema);