const { Thought, User } = require('../models');

module.exports = {
     // block to get all users
     async getAllUsers(req, res) {
          try {
               const userData = await User.find();
               res.json(userData);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // block to get all thoughts
     async getAllThoughts(req, res) {    
          try {
               const thoughtData = await Thought.find();
               res.json(thoughtData);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     }
};