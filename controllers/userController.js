const { User, Thought } = require('../models');


module.exports = {
     // block to get all users
     // Referred the below link for fetch data for thoughts
     // https://stackoverflow.com/questions/26818071/mongoose-schema-hasnt-been-registered-for-model
     async getAllUsers(req, res) {
          try {
               const userData = await User.find().populate({path:'thoughts', model:Thought});
               res.status(200).json(userData);
          } catch (err) {
               console.log("Error in fetching all users data==", err);
               res.status(500).json(err);
          }
     }, 

     // block to get a single user by id
     async getUserById(req, res) {
          try {
               const userData = await User.findOne({ _id: req.params.id }).populate({path: 'thoughts', model: Thought});
               if (!userData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
               }
               res.status(200).json(userData);
          } catch (err) {
               console.log("Error in fetching user data by Id==", err);
               res.status(500).json(err);
          }
     },

     // Code block to create new user
     async createUser(req, res) {
          try {
               const userData = await User.create(req.body);
               res.status(200).json(userData); 
          } catch (err) {
               console.log("Error in creating a new user==", err);
               res.status(500).json(err);
          }
     },

     // Code to update user
     async updateUserById(req, res) {
          try {
               const userData = await User.findByIdAndUpdate(
                    { _id: req.params.id },
                    { $set: req.body },
                    { runValidators: true, new: true }
               );

               if (!userData) {
                    return res.status(404).json({ message: 'No user found with this id!' });
               }
               res.status(200).json(userData);

          } catch (err) {
               console.log("Error in updating a user==", err);
               res.status(500).json(err);
          }
     },

     // Code to delete a user
     async deleteUserById(req, res) {
          try {
               const userData = await User.findByIdAndDelete({ _id: req.params.id });

               if (!userData) {
                    return res.status(404).json({ message: 'No user found with this id!' });
               }
               res.status(200).json({ message: 'Deleted user with this id!' });
               
          } catch (err) {
               console.log("Error in deleting a user==", err);
               res.status(500).json(err);
          }
     },
     
     // Code block to a new friend to the user
     //api/users/:id/friends/:friendId
     async addFriendToUserById(req, res) {
          try {
               const userData = await User.findByIdAndUpdate(
                    { _id: req.params.id },
                    { $addToSet: { friends: req.params.friendId } },
                    { runValidators: true, new: true }
               );

               if (!userData) {
                    return res.status(404).json({ message: 'No user found with this id!' });
               }

               res.status(200).json(userData);       
          } catch (err) {
               console.log("Error in adding a friend to the user==", err);
               res.status(500).json(err);
          }
     },

     // Code block to delete a friend for a user
     async deleteFriendForUserById(req, res) {
          try {
               const friendData = await User.findByIdAndUpdate(
                    { _id: req.params.id },
                    { $pull: { friends: req.params.friendId  } },
                    { runValidators: true, new: true }
               ); 

               if (!friendData) {
                    return res.status(404).json({ message: 'No friend found with this id!' });
               }

               res.status(200).json(friendData);       
               
          } catch (err) {
               console.log("Error in deleting a friend==", err);
               res.status(500).json(err);
          }
     }
};