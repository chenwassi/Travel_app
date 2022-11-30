const commentsBL = require('../BL/commentsBL')
const express = require('express')
const app = express.Router()

app.get('/',async(req,res)=>{
    const data =await commentsBL.allData()
    res.json(data)
})
app.delete('/:id',async(req,res)=>{
    const {id} = req.params
    const data =await commentsBL.removeComment(id)
    res.json(data)
})
app.put('/:id',async(req,res)=>{
    const {id} = req.params
    const obj = req.body
    const data =await commentsBL.editComment(id,obj)
    res.json(data)
})
app.post('/',async(req,res)=>{
    const obj = req.body
    const data =await commentsBL.addcomment(obj)
    res.json(data)
})
app.put('/:id',async(req,res)=>{
    const {id} = req.params
    const obj = req.body
    const data = await commentsBL.updatePost(id,obj)
    res.json(data)
})
module.exports = app