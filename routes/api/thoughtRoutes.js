const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// Route to get all thoughts and create a thought
router.route("/").get(getAllThoughts).post(createThought);

//  Route to get, update, and delete a thought by id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Route to add a reaction
router.route("/:id/reactions").post(addReaction);

//  Route to delete a reaction
router.route("/reactions/:id/:reactionId").delete(deleteReaction);
module.exports = router;
