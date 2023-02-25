var express = require("express");
var bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    res.send("Hello world");
});




app.listen(3000, function(){
    console.log("this server is running on the port 3000");
})


