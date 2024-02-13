const { User } = require('../models');

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
     }
};