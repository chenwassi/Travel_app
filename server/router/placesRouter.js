const placesBL = require('../BL/placesBL')
const express = require('express')
const app = express.Router()

app.get("/" , async(req,res)=>{
    const data = await placesBL.allData()
    res.json(data)
})
app.get("/:id" , async(req,res)=>{
    const {id} = req.params
    const data = await placesBL.getById(id)
    res.json(data)
})

app.post("/" , async(req,res)=>{
    const obj  =  req.body 
    const addData = await placesBL.addPlace(obj)
    res.json(addData)
})
module.exports = app