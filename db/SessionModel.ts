import mongoose from "mongoose";

const schema: mongoose.Schema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Session", schema);