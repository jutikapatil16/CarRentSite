const mongoose = require('mongoose');
function connectDB(){
  mongoose.connect("mongodb+srv://jutika:test123@cluster0.rk4ej.mongodb.net/test", {useUnifiedTopology:true, useNewUrlParser: true});

  const connection = mongoose.connection

  connection.on('connected', ()=>{
    console.log('MongoDb connection Successful.')
  })
  connection.on('error', ()=>{
    console.log('MongoDb connection Error.')
  })
}

connectDB()
module.exports = mongoose

