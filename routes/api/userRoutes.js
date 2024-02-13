const router = require('express').Router();
// Importing all the method from the userController
const { getAllUsers } = require('../../controllers/userController');
// This route is to get all the users
router.route('/').get(getAllUsers);

module.exports = router;