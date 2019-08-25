//jshint esversion:6

const express = require("express");

const app = express();

//req means request and res means response
app.get("/", function(req, res){
  res.send("<h1>Hello, This is working!!</h1>");
});

app.get("/contact", function(req,res){
  res.send("This is my contact info page.");
});
app.get("/about", function(req, res){
  res.send("This will be the about page.  Beautiful it works!");
});
app.listen(3000, function(){
  console.log("Server started on port 3000");
});

var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperheroName = superheroes.random();
var mySupervillainName = supervillains.random();

console.log(mySuperheroName);
console.log(mySupervillainName);
