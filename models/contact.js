const { Schema, model } = require("mongoose");
const { hendleMangooseError } = require("../helpers");

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

contactSchema.post("save", hendleMangooseError);

const Contact = model("contact", contactSchema);

module.exports = Contact;
