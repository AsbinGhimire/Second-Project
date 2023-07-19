const express = require ('express');
const app = express();

const ejs = require("ejs");
const { sequelize, Blog } = require("./model/");
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
app.get("/blogss",async(req,res)=>{
    const blogs = await Blog.findAll()
    res.render('blogPost',{blogs})
    // res.render("blogPost")
})


// for displaying singleBlog
app.get('/blogs/:id',async(req,res)=>{
const blog = await Blog.findAll({
    where:{
        id:req.params.id
          }
        });
        console.log(blog)
    res.render('singleBlog',{blog})
});

// for removing a blog
app.get('/delete/:id',async(req,res)=>{
    await Blog.destroy({
        where:{
            id:req.params.id
              }
            });
        res.redirect('/blogss')
    });




app.post("/blog",blogUser);



// server start
app.listen(3000, ()=>{
    console.log("Successfully! server has started on port no: 4000");
});