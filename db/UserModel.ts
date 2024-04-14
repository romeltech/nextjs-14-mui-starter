import mongoose from "mongoose";

const schema: mongoose.Schema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

// export default mongoose.model("User", schema);
export const User = mongoose.models.User || mongoose.model("User", schema);