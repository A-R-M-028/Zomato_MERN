import mongoose from "mongoose";
import { UserModel } from "../user";

const MenuSchema = new mongoose.Schema(
  {
    menus: [
      {
        name: { type: String, required: true },
        items: [
          {
            type: mongoose.Types.ObjectId,
            ref: "Foods",
          },
        ],
      },
    ],
    recommended: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Foods",
        unique: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("Menus", MenuSchema);
