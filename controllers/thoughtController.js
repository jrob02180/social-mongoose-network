const { Thought, User } = require("../models");

module.exports = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    // try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  },
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.id });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.id },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );

      res.json("Created new thought 🎉");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.id });

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }

      res.json({ message: "Thought successfully deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Add a reaction
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with this id!" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove a reaction
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndRemove(
        { _id: req.params.id },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with this id!" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
