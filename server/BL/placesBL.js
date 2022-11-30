const placesModel = require('../model/placesModel')

const allData = async()=>{
    const data = await placesModel.find({})
    return data
}
const getById = async(id)=>{
    const data = await placesModel.findById(id)
    return data
}
const addPlace = async(obj)=>{
    const data = new placesModel({
    name:obj.name,
    image:[obj.image],
    location:obj.location,
    coords:[obj.coords],
    info:obj.info,
    })
    await data.save()
    return 'added'
}

module.exports = {allData,getById,addPlace}
