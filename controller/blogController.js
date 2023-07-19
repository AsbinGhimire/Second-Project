const { users, Blog } = require("../model");
exports.blogUser = async (req,res)=> {
    
    const {title, subtitle, description} = req.body;
    console.log(req.body);

    await Blog.create({
        title: title,
         subtitle: subtitle,
        description: description
       } );
      res.redirect("/blogss");
 };
