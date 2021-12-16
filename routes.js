const express = require("express");
const orderData = require("./models");
const userData = require("./userschema");
const app = express();
var bodyParser = require('body-parser');
const mongoose = require("mongoose");
//const genrator = require("./genrator")

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())



var randomId = require('random-id');
var foodarr = ["Chapati-3 Curry-1", "Dosa-2", "biryani-1", "Soup-3"];
var pricearr = [400, 160, 280, 270];
var vendorarr = ["FoodPanda", "Swiggy", "UberEats", "Zomato"]


function Gen_food_Fun() {
  return (foodarr[Math.floor(Math.random() * foodarr.length)]);
}
function Gen_rate_Fun() {
  return (pricearr[Math.floor(Math.random() * foodarr.length)]);
}

function Gen_vendor_Fun() {
  return (vendorarr[Math.floor(Math.random() * vendorarr.length)]);
}

app.post("/order", async (request, response) => {
  //console.log(request.body);
  //console.log(JSON.stringify(response));
  const order = new orderData(request.body);
  console.log(order);
  try {
    await order.save();

    response.send(order);
  } catch (error) {
    response.status(500).send(error);
  }
});
//mongoose.Types.ObjectId
app.post('/update', function (request, response) {
  console.log("Data updated!" + JSON.stringify(request.body));
  orderData.updateOne({ id: request.body.id }
    , { orderstatus: request.body.orderstatus }, function (err, data) {

      if (err) {
        console.log(err);
      }
      else {
        response.send(data);
        console.log("Data updated!");
      }
    });
})
app.get("/history", async (request, response) => {

  try {
    orderData.find({}, function (err, result) {
      if (err) {
        response.send(err);
      } else {
        response.json(result);
      }
    })
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/user", async (request, response) => {

  try {
    userData.find({}, function (err, result) {
      if (err) {
        response.send(err);
      } else {
        response.json(result);
      }
    })
  } catch (error) {
    response.status(500).send(error);
  }
});
var arr = [];
app.get("/order", async (request, response) => {
  setInterval(function () {
    let id = randomId(),
      timestamp = new Date(),
      order = Gen_food_Fun(),
      price = Gen_rate_Fun(),
      vend = Gen_vendor_Fun(),
      orderstatus = "New";
    arr.push({ id: id, timestamp: timestamp, order: order, price: price, vend: vend, orderstatus: orderstatus });

  }, 30000)
  response.json(arr)
});

module.exports = app;