const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
// _id:mongoose.Types.ObjectId,
name:String,
location:String,
info:String,
video:String,
text:String,
image:[String],
coords:[String],
})
const model = mongoose.model('places',placeSchema)
module.exports = model