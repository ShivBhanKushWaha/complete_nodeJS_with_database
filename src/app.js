const express = require("express");
const hbs = require("hbs");
const path = require("path");
require("./db/connection");
const User = require("./models/usermessage");
const routes = require("./routes/routes");

const app = express();
const port = process.env.PORT || 5000;

//middleware 
// bootstrap file using static path
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

// to read data from form contact form 
app.use(express.urlencoded({extended:true}))
app.use('',routes);
// to set static path
app.use(express.static("public"));

//to set views
app.set('view engine','hbs');
// this code is use if not use templates and partials
// app.set("views","views");

// to  set partials and templates
app.set("views","templates/views");
hbs.registerPartials("templates/partials");

// instead of routing we use routes in routes folder

// routing 
// app.get("/",(req,res) => {
//     res.render("Index");
// });


// app.post("/Contact" ,async (req,res) => {
//     console.log("This contact is submited successfully ");

//     // to save data in database
//     try{
//         // to show data in browser
//         // res.send(req.body); 

//         // form se jo bhi data ayega use userData me store krna hai aur .save function call krna hai
//         const userDate = new User(req.body);
//         await userDate.save();
//         res.status(201).render("/");
//         console.log(req.body);
//     }
//     catch(error){
//         console.log(error)
//     }
// })

// server create
app.listen(port, () => {
    console.log(`Server is running at the port number ${port}`);
})