const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

// const fs = require("fs");

const { authRouter } = require("./routes/api");
const { contactsRouter } = require("./routes/api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.json("public"));
app.use("/api/contacts", contactsRouter);
app.use("/api/auth", authRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json(message);
});

// const contactsDir = path.join(__dirname, "public", "contacts");

// app.post("/api/contacts", upload.single("avatar"), async (req, res) => {
//   const { path: tempUploadd, originalname } = req.file;
//   const resultUpload = path.join(contactsDir, originalname);
//   await fs.rename(contactsDir, resultUpload);
//   const avatar = path.join("contacts", originalname);
//   const newConntacts = {
//     id,
//     ...req.body,
//     avatar,
//   };
// });

module.exports = app;
