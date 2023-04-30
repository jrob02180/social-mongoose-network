const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// Route to get all users and create a user
router.route("/").get(getUsers).post(createUser);

// Route to get, update, and delete a user by id
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

// Route to add and delete a friend
router.route("/:id/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
