const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
     {
          thoughtText: {
               type: String,
               required: true,
               min: 1,
               max: 280,
          },
          createdAt: {
               type: Date,
               default: Date.now(),
          },
          username: {
               type: String,
               required: true,
          },
          reactions: [
               {
                    type: Schema.Types.ObjectId,
                    ref: 'Reaction'
               }
          ]
     },
     {
          toJSON: {
               virtuals: true
          },
          id: false
     }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;