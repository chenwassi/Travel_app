const userBL = require('../BL/userBL')
const express = require('express')
const app = express.Router()

app.get("/" , async(req,res)=>{
    const data = await userBL.userData()
    res.json(data)
})
module.exports = app