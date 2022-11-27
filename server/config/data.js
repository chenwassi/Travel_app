const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGO_DB}`,()=>{
    console.log('connect to DB');
} )
