const router = require('express').Router();

// Importing all the method from the thoughtController
const { getAllThoughts, getThoughtById, createThought, updateThoughtById, deleteThoughtById, addReactionToThoughtById, deleteReactionById } = require('../../controllers/thoughtController');

// Referred this part from the class activity mini project
// On the root route thoughts, to get all the thoughts or to create a new thought
router.route('/').get(getAllThoughts).post(createThought);

// This route is to get a single thought by id or to update a thought by id
router.route('/:id').get(getThoughtById).put(updateThoughtById).delete(deleteThoughtById);

// This route is for adding reactions
router.route('/:id/reactions').post(addReactionToThoughtById);

//This route is for deleting a particular reaction
router.route('/:id/reactions/:reactionId').delete(deleteReactionById);

module.exports = router;