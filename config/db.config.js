const mongoose = require("mongoose");

const dbConnection = () => {
  return mongoose.connect("mongodb://localhost:27017/EcommerceAppDb");
};

module.exports = dbConnection;
