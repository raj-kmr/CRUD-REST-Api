const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/crud_restapi")
.then(() => console.log("MongoDb connected Successfully"))
.catch((err) => console.error("MongoDb connection error:  " + err))
