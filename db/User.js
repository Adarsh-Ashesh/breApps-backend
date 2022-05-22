const mongoose = require('mongoose');
const demoSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports = mongoose.model("demo",demoSchema)