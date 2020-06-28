const router = require('express').Router();

const commentRoutes = require('./comment-routes');
const workoutRoutes = require('./workout-routes');
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;