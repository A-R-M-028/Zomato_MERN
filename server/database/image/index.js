import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    imges: [
      {
        // Referenced
        location: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("Images", ImageSchema);
