//jshint esversion:6

const express = require("express");//requiring necessary packages
const https = require("https");//requiring necessary packages
const bp = require("body-parser");//requiring necessary packages

const app = express();

app.use(express.static("public"));//making a public folder to be accessable everywhere
app.use(bp.urlencoded({extended: true}));


app.listen(3000, function(){
  console.log("Server is running on port 3000");//to run on a localserver 3000
});

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");//to call the index.html file
});
