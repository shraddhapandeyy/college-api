import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      default: "",
    },
    subjects: [
      {
        name: String,
        code: String,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = mongoose.model("Faculty", FacultySchema);
