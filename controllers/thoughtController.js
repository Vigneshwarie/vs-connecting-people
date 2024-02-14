const { Thought } = require('../models');

module.exports = {
     // block to get all thoughts
     async getAllThoughts(req, res) {    
          try {
               const thoughtData = await Thought.find();
               res.status(200).json(thoughtData);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // block to get a single thought by id
     async getThoughtById(req, res) {
          try {
               const thoughtData = await Thought.findOne({ _id: req.params.id });
               if (!thoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
               }
               res.status(200).json(thoughtData);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // block to create a new thought
     async createThought(req, res) {
          try {
               const thoughtData = await Thought.create(req.body);
               res.status(200).json(thoughtData);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // code block to update a thought by id for new reaction
     async updateThoughtById(req, res) {
          try {
               const thoughtData = await Thought.findOneAndUpdate(
                    { _id: req.params.id },
                    { $addToSet: { reactions: req.body } },
                    { runValidators: true, new: true }
               );
               if (!thoughtData) {
                    return res.status(404).json({ message: 'No thought found with this id!' });
               }
               res.status(200).json(thoughtData);
               
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     }
};