const router = require('express').Router();
// Will import all the routes here. As of now including only thoughtRoutes
const thoughtRoutes = require('./thoughtRoutes');

router.use('/thoughts', thoughtRoutes);

module.exports = router;
