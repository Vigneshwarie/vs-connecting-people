const users = [
     {
          username: 'viggy',
          email: 'viggy@example.com',
     },
     {
          username: 'john',
          email: 'john@example.com',
     },
     {
          username: 'jane',
          email: 'jane@example.com',
     },
     {
          username: 'kim',
          email: 'kim@example.com',
     }
];

const reactions = [
     {
          reactionBody: 'Im learning MongoDB!',
          username: 'viggy'
     },
     {
          reactionBody: 'That is great!',
          username: 'john'
     },
     {
          reactionBody: 'I love relational database!',
          username: 'jane'
     },
     {
          reactionBody: 'NoSQL databases are cool to work with',
          username: 'kim'
     }
];

const thoughts = [
     {
          thoughtText: 'I love MongoDB!',
          username: 'john',
          reactions: [reactions[0]]
     },
     {
          thoughtText: 'I love NoSQL databases!',
          username: 'jane',
          reactions: [reactions[1]]
     },
     {
          thoughtText: 'I love relational databases!',
          username: 'kim',
          reactions: [reactions[2]]
     },
     {
          thoughtText: 'I love databases!',
          username: 'viggy',
          reactions: [reactions[3]]
     }
];

module.exports = { users, thoughts, reactions };