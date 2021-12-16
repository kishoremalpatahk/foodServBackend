bodyParser = require('body-parser');
var express = require('express');
var app = express();
var randomId = require('random-id');
const data = require("../data.json");
Realm = require('realm');
var input = []; // initialise an empty array


let Post= {
   name: 'Post',
   properties: {
     id:'int',
     timestamp: 'date',
     order: 'string',
     price:'int',
     vend: 'string',
     orderstatus:'string'
   }
 };
 
 const realm =  Realm.open({
   schema: [Post],
 });

 app.post('/write', function(req, res) {
     let id = randomId(),
     timestamp = new Date(),
     order=food,
     price=rate,
     vend=vendor,
     orderstatus="New";
     blogRealm.write(() => {
     blogRealm.create('Post', {id: id, timestamp: timestamp,order:order,price:price,vend:vend,orderstatus:orderstatus});
   });
 })

setInterval(function () {
   const order = {
      date: new Date(),
      food: [{ item: 'chapati', price: 100 }]
   };
   input.push(order);
}, 30000);




app.get('/order', function (req, res) {
  let tasks =Realm.open({}).then( realm.objects("Post"));
   //res.send(JSON.stringify(tasks));
   console.log(tasks)
});

app.listen(3000);
