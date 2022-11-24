const mongoose = require('mongoose')

const CommentsSchema = new mongoose.Schema({
    // _id:mongoose.Types.ObjectId,
    placeId : String,
    userName:String,
    text:String
},{timestamps:true})
const model = mongoose.model('opinions',CommentsSchema)
module.exports = model
