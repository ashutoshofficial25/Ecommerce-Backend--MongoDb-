const express = require("express");
const dbConnection = require("./config/db.config");
const app = express();

app.listen(5000, async () => {
  console.log(`server started`);
  await dbConnection();
  console.log("databse connected");
});
