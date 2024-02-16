const router = require('express').Router();
// Importing all the method from the userController
const { getAllUsers, getUserById, createUser, updateUserById, deleteUserById, addFriendToUserById, deleteFriendForUserById } = require('../../controllers/userController');

try {
     // This route is to get all the users
     router.route('/').get(getAllUsers).post(createUser);

     // This route is to get a single user by id
     router.route('/:id').get(getUserById).put(updateUserById).delete(deleteUserById);

     // This route is for friends
     //api/users/:id/friends/:friendId
     router.route('/:id/friends/:friendId').post(addFriendToUserById).delete(deleteFriendForUserById);
} catch (err) {
     console.log("Error in the User Router==", err);
}


module.exports = router;