const mongoose = require("mongoose");

const LibrarySchema = new mongoose.Schema(
  {
    books: [
      {
        name: String,
        id: {
          type: String,
          required: true,
          unique: true,
        },
        author: String,
        patron: String                  // Member username whom the book has been assigned to 
      }
    ],
    members: [
      {
        name: String,
        username: {
          type: String,
          unique: true,
          // required: true,
        }
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Library = mongoose.model("Library", LibrarySchema);
module.exports = Library