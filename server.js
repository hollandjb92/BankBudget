 const express = require("express");

 const mongoose = require("mongoose");
 const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/User"


// Define middleware here
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());


// // Add routes, both API and view
 app.use(routes);
/*
// Connect to the Mongo DB
//mongoose.connect('mongodb://localhost/User');
mongoose.connect("mongodb://localhost/User")
.then(() =>{ 
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});
*/


// Connect to the db
mongoose.connect(url, function(err, db) {
  if(err) {
    console.log(err);
  }
  else{
    console.log("connected")
  }
});


//console.log(process.env.MONGODB_URI)

//Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
