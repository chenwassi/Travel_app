const commentsModel = require('../model/commentsModel')

const allData = async ()=> {
return await commentsModel.find({}) 
}
const editComment = async(id,obj)=>{
    return await commentsModel.findByIdAndUpdate(id,obj)
}
const removeComment = async(id)=>{
    return await commentsModel.findByIdAndDelete(id)
}
const addcomment = async (obj)=>{
const newObj = new commentsModel({
    placeId:obj.placeId,
    userName:obj.userName,
    text:obj.text
})
await newObj.save()
return 'update'
}
const updatePost= async (id,obj)=>{
return await commentsModel.findByIdAndUpdate(id,obj)
}

module.exports = {allData,editComment,addcomment,removeComment,updatePost}