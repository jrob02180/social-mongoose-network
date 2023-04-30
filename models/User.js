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
      validate: {
        validator: function (email) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
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
  .set(function (v) {
    return (this.friends.length = v);
  });

const User = model("User", userSchema);

module.exports = User;
