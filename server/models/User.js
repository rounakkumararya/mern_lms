const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    profilePic: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg",
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    userEmail: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
