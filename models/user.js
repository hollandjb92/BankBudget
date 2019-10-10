const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  firstName: String,
  lastName: String,
  totalChecking: Number,
  totalSaving: Number,
  transactions: {
    withdrawals: { type: [Number]},
    deposits: { type: [Number]}
},
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
