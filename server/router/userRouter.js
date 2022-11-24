const userBL = require('../BL/userBL')
const express = require('express')
const app = express.Router()

app.get("/" , async(req,res)=>{
    const data = await userBL.userData()
    res.json(data)
})
app.post('/',async(req,res)=>{
    const obj = req.body
    const data = await userBL.addUser(obj)
    res.json(data)
})
module.exports = app