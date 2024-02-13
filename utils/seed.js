const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts, reactions } = require('./data');

connection.on('error', (err) => console.log(err));

connection.once('open', async () => { 
     console.log('Connected to the database');
     
     let thoughtsData = await connection.db.listCollections({ name: 'thought' }).toArray();
     if (thoughtsData.length) {
          await connection.dropCollection('thought');
     }

     let userData = await connection.db.listCollections({ name: 'user' }).toArray();
     if (userData.length) {
          await connection.dropCollection('user');
     }

     await User.collection.insertMany(users);
     await Thought.collection.insertMany(thoughts);
 
     console.log('Data seeded');
     process.exit(0);
     
});