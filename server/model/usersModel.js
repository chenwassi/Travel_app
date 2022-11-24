const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    // _id:mongoose.Types.ObjectId,
    firstName:String,
    lastName:String,
    userName:String,
    email:String,
    password:String
})
const model = mongoose.model('users',userModel)
module.exports = model