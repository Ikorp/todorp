const express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
PORT = process.env.PORT || 3000;

//deprecation workarounds
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost/todorp");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));



//Root route
app.get("/", function(req, res){
    res.render("home");    
});


app.listen(PORT, () => console.log("SERVER STARTS"));