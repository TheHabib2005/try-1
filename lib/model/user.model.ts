import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
    enum: ["local", "google"],
  },
  profilePicture: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/1053/1053244.png",
  },
  orders: [],
});

const User = mongoose.models.users || mongoose.model("users", userModel);

export default User;
