const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://chenwassi:wassi1206@cluster0.avst8xc.mongodb.net/travelsDB?retryWrites=true&w=majority',()=>{
    console.log('connect to DB');
} )