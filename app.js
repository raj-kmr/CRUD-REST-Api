require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./src/db/mongoose-connection")
const userRoutes = require("./src/routes/user-routes");
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.use("/api", userRoutes);

app.get("/", function(req, res) {
    res.send("Server setup")
});

app.listen(PORT, function(req, res) {
    console.log("Server running");
});