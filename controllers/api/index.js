const router = require('express').router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;