//Import express
const express = require('express');
const db = require('./config/connection');
//Importing routes
const routes = require('./routes');

//PORT for the express app
const PORT = process.env.PORT || 3001;
//Create an instance of express
const app = express();

//Middleware to parse the request body 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Middleware to use the routes
app.use(routes);

//Application listening on PORT
db.once('open', () => {
     app.listen(PORT, () => {
          console.log(`Application running on PORT ${PORT}`);
     });
});
