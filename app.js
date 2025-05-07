const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Server setup")
});

app.listen(3000, function(req, res) {
    console.log("Server running");
});