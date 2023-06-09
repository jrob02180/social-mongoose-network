const { Schema, model } = require("mongoose");

// Schema to create a user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /.+\@.+\..+/,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//  Schema to create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema
  .virtual("friendCount")
  .get(function () {
    return this.friends.length;
  })
  // .set(function (v) {
  //   return (this.friends.length = v);
  // });

const User = model("User", userSchema);

module.exports = User;
