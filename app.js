const express = require ('express');
const app = express();

const ejs = require("ejs");
const { sequelize } = require("./model/");
const { blogUser } = require('./controller/blogController');

// import ejs
app.set ('view engine', 'ejs')

// body batw aako datalai read gar vaneko
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sending message in new page
app.get("/",(req,res)=>{
    res.send("hello its me asbin ghimire from hunuhunxa degital !!")
});

// rendering blog.ejs page
app.get("/blog",(req,res)=>{
    res.render("blog")
})

app.post("/blog",blogUser);

// server start
app.listen(4000, ()=>{
    console.log("Successfully! server has started on port no: 4000");
})