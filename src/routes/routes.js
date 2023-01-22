const express = require("express");
const routes = express.Router();
const User = require("../models/usermessage");

routes.get("/",async (req,res) => {
    res.render("index");
});

routes.post("/Contact" ,async (req,res) => {
    console.log("This contact is submited successfully ");

    // to save data in database
    try{
        // to show data in browser
        // res.send(req.body); 

        // form se jo bhi data ayega use userData me store krna hai aur .save function call krna hai
        const userDate = new User(req.body);
        await userDate.save();
        res.status(201).redirect("/");
        console.log(req.body);
    }
    catch(error){
        console.log(error)
    }
});

module.exports = routes;