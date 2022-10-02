import mongoose from "mongoose";

const LibrarySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
      unique: true,
    },
    books: [
      {
        name:String,
        id: {
          type:String,
          required: true,
          unique: true,
        },
        author: String,
      }
    ],
    members: [
      {
        name: String,
        username: {
          type: String,
          unique: true,
          required: true,
        }
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = mongoose.model("Library", LibrarySchema);
