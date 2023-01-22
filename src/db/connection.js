const mongoose = require("mongoose");

// creating a database
mongoose.connect("mongodb://localhost:27017/projectmern",{
    // useCreateIndex:true, // this is not supported
    // useNewUrlParser:true,
    // useUnifiedTopology:true
}).then(() => {
    console.log("Connection establish successfully");
}).catch((error) => {
    console.log(error);
});
