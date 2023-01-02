const express = require("express");
const app = express();


app.get("/",function(request,respond){
  respond.send("hello");
  console.log(request);
})
//app listening
app.listen(3000,function() {console.log("server started at 3000");});