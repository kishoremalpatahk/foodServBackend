const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")
var cors = require('cors')
var app = express()
 
app.use(cors())

const username = "kmalpathak";
const dbname = "foodServe";

mongoose.connect(
  `mongodb+srv://${username}:2020Tech!@cluster0.1cg07-mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
   // useNewUrlParser: true,
   // useFindAndModify: false,
    useUnifiedTopology: true
  }
)


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use(Router);
app.listen(8000, () => {
   console.log("Server is running at port 3000");
 });
