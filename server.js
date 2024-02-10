//Import express
const express = require('express');

//PORT for the express app
const PORT = process.env.PORT || 3001;
//Create an instance of express
const app = express();

//Middleware to parse the request body 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Application listening on PORT
app.listen(PORT, () => {
     console.log(`Application running on PORT ${PORT}`);
});