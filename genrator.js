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
var arr = [];
var output=setInterval(function () {
let id = randomId(),
    timestamp = new Date(),
    order = Gen_food_Fun(),
    price = Gen_rate_Fun(),
    vend  = Gen_vendor_Fun(),
    orderstatus = "New";
    arr.push({ id: id, timestamp: timestamp, order: order, price: price, vend: vend, orderstatus: orderstatus })
}, 30000);

module.exports = output
