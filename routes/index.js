// Referred this part from the class activity mini project
const router = require('express').Router();
const apiRoutes = require('./api');
// As the requirement says to use api in the routes, I have used the same.
router.use('/api', apiRoutes);

module.exports = router;