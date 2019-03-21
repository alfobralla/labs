var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
var port = process.env.PORT || 8080;

app.get("/", (req, res)=>{
    console.log("new req");
    res.send("<html><body>Hola mundo</body></html>")
})
app.listen(port, ()=>{
    console.log("que guay todo " + port);
});

