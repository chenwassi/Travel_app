const express = require('express')
const cors = require('cors')
const PORT = 8800
const app = express()
require ('./config/data')

app.use(cors())
app.use(express.json())

const userRouter = require('./router/userRouter')
app.use('/login',userRouter)

app.listen(PORT,()=>{
    console.log(`app is listeing to ${PORT}`);
})