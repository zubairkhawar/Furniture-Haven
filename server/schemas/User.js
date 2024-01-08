const { Schema, model } = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

userSchema.plugin(paginate);

const User = model("user", userSchema);

module.exports = User;
