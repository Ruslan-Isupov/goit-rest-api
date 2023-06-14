const { error } = require("console");
const app = require("./app");
const mangoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Ruslan:Fc7MChunUN7yVRUl@cluster0.2ykrai3.mongodb.net/contacts_db?retryWrites=true&w=majority";

mangoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

mangoose.set("strictQuery", true);

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
