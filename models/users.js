const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const argon2 = require("argon2");

const UsersSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 6,
      maxLength: 32,
      unique: true,
    },
    email: { type: String, required: true, maxLength: 255, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

UsersSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  argon2
    .hash(this.password)
    .then((hash) => {
      this.password = hash;
      next();
    })
    .catch(next);
});



module.exports = mongoose.model("users", UsersSchema);
