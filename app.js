const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));




app.get("/",(req,res)=>{
    console.log(" home page get");
    res.render("home",{Title:"Welcome"});
})

app.get("/home",(req,res)=>{
    console.log(" home page get");
    res.redirect("/");
});

app.get("/Projects",(req,res)=>{
    console.log("Projects!");
    res.render("projects",{Title:"Projects"});
});

app.get("/Experience", (req,res)=>{
    console.log("Experience");
    res.render("experience",{Title:"Experience"});

});

app.get("/Contact", (req,res)=>{
    console.log("Contact");
    res.render("contact",{Title:"Contact"});

});

app.get("/About-Me", (req,res)=>{
    console.log("About-Me");
    res.render("about_me",{Title:"About Me"});

});



app.listen(3000,(req,res)=>{
    console.log("Server Start!");
})
