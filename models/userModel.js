const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  salary: {
    type: String,
  },
  department: {
    type: String,
  },
  lastCompany: {
    type: String,
  },
  lastSalary: {
    type: String,
  },
  overallExp: {
    type: String,
  },
  contactInfo: {
    type: String,
  },
  yearGrad: {
    type: String,
  },
  gradStream: {
    type: String,
  },
});

module.exports = mongoose.model("Employee", userSchema);
