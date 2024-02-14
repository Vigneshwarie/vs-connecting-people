const router = require('express').Router();

// Importing all the method from the thoughtController
const { getAllThoughts, getThoughtById, createThought } = require('../../controllers/thoughtController');

// Referred this part from the class activity mini project
router.route('/').get(getAllThoughts).post(createThought);
// This route is to get a single thought by id
router.route('/:id').get(getThoughtById);

module.exports = router;