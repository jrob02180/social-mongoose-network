const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThoughts);

//  /api/thoughts by ID
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// /api/thoughts/:userId
router.route('/:userId').post(createThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:id/reactions').post(addReaction).delete(removeReaction);

module.exports = router;