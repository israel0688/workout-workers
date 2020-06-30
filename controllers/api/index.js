const router = require('express').Router();

const commentRoutes = require('./comment-routes');
const workoutRoutes = require('./workout-routes');
const userRoutes = require('./user-routes.js');
const employerRoutes = require('./employer-routes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/workouts', workoutRoutes);
router.use('/employers', employerRoutes);

module.exports = router;