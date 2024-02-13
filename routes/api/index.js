const router = require('express').Router();
// Will import all the routes here. As of now including only thoughtRoutes
const thoughtRoutes = require('./thoughtRoutes');
// Importing userRoutes
const userRoutes = require('./userRoutes');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
