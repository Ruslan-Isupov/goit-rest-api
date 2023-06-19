// const { error } = require("console");
const app = require("./app");
const mangoose = require("mongoose");

const { DB_HOST } = process.env;
mangoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
