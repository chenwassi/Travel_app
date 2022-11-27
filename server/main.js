require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = 8800
const app = express()
require ('./config/data')

app.use(cors())
app.use(express.json())

const userRouter = require('./router/userRouter')
app.use('/login',userRouter)

const placesRouter = require('./router/placesRouter')
app.use('/places',placesRouter)

const commentsRouter = require('./router/commentsRouter')
app.use('/comments',commentsRouter)

app.listen(PORT,()=>{
    console.log(`app is listeing to http://localhost:${PORT} `);
})