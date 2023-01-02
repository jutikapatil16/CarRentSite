const express =require("express");
const app = express();
const port = process.env.PORT || 5000
const dbConnection = require('./db')

app.get("/",function(request,respond){
  respond.send("hello");
  console.log(request);
})

app.listen(port,function() {console.log(`server started at ${port}`);});