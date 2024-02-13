const router = require('express').Router();

// Importing all the method from the thoughtController
const { getAllThoughts } = require('../../controllers/thoughtController');

// Referred this part from the class activity mini project
router.route('/').get(getAllThoughts);

module.exports = router;