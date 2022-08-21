import mongoose from "mongoose";
const { Schema } = mongoose;

// created schema for User Collection
const userSchema = new Schema(
  {
    f_name: {
      required: [true, "First name is required, please provide."],
      type: String,
    },
    l_name: {
      required: [true, "Last name is also required, please provide."],
      type: String,
    },
    email: {
      required: [
        true,
        "User account cannot be created without email, please provide.",
      ],
      type: String,
    },
    password: {
      required: [
        true,
        "Secure user account needs a secure password, please provide.",
      ],
      type: String,
    },
    posts_count: {
      required: [true, "Please add some text in the body."],
      type: number,
      default: 0,
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// created model for User Schema
const User = mongoose.model("User", userSchema);

// exporting User Model
export default User