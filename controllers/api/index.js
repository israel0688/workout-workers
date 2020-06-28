const router = require('express').Router();
const commentRoutes = require('./comment-routes');

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;