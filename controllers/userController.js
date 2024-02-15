const { User } = require('../models');

module.exports = {
     // block to get all users
     async getAllUsers(req, res) {
          try {
               const userData = await User.find();
               res.status(200).json(userData);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // block to get a single user by id
     async getUserById(req, res) {
          try {
               const userData = await User.findOne({ _id: req.params.id });
               if (!userData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
               }
               res.status(200).json(userData);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // Code block to create new user
     async createUser(req, res) {
          try {
               const userData = await User.create(req.body);
               res.status(200).json(userData); 
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     }
};