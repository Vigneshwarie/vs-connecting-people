const { Thought } = require('../models');

module.exports = {
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