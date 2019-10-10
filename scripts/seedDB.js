const mongoose = require("mongoose");
const db = require("../models");

// This file empties the User collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactuser"
);

// email: { type: String, required: true },
// firstName: String,
// lastName: String,
// totalChecking: Number,
// totalSaving: Number,
// transactions: {
//   withdrawals: { type: Number},
//   deposits: { type: Number}
// },
// date: { type: Date, default: Date.now }


const userSeed = [
  {
    email: "deadzone@gmail.com",
    firstName: "Stephen",
    lastName: "King",
    totalChecking: 100000,
    totalSaving: 343035095,
    transactions: {
      withdrawals: [10000, 3999], 
      deposits: [-50, -600]
    },
    date: new Date(Date.now())
  },
  {
    email: "flies@gmail.com",
    firstName: "William",
    lastName: "Golding",
    totalChecking: 13400,
    totalSaving: 3980,
    transactions: {
      withdrawals: [45, 938], 
      deposits: [-10, -30]
    },
    date: new Date(Date.now())
  },
  {
    email: "rye@gmail.com",
    firstName: "J.D.",
    lastName: "Salinger",
    totalChecking: 400,
    totalSaving: 400959584,
    transactions: {
      withdrawals: [200, 22], 
      deposits: [-5000, -8577]
    },
    date: new Date(Date.now())
  },
  
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
