const express = require("express");
var app = express();

var path = require("path");

function pet(name, age, type) {
  this.name = name;
  this.age = age;
  this.type = type;
}

var chow = new pet("Chow", 8, "Best Doggo");
var linlin = new pet("LinLin",88,"Panda");
var data = [chow,linlin];



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/info", (req, res) => {
    app.use(express.static('pictures'));
    res.sendFile(path.join(__dirname +"/petinfo.html"));
});

app.get("/pictures",(req,res)=>{
    app.use(express.static('pictures'));
    res.sendFile(path.join(__dirname+"/petpictures.html"));
})
app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT || 8080);
