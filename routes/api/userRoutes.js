const router = require('express').Router();
// Importing all the method from the userController
const { getAllUsers, getUserById } = require('../../controllers/userController');
// This route is to get all the users
router.route('/').get(getAllUsers);
// This route is to get a single user by id
router.route('/:id').get(getUserById);

module.exports = router;