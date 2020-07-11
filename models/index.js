const User = require('./User');
const Comment = require('./Comment');
const Workout = require('./Workout');
const Employer = require('./Employer');

// associations
// User.hasMany(Workout, {
//   foreignKey: 'user_id'
// });

// Workout.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id'
//   });

// Comment.belongsTo(Workout, {
//   foreignKey: 'workout_id'
// });

// User.hasMany(Comment, {
//     foreignKey: 'user_id'
//   });

// Workout.hasMany(Comment, {
//   foreignKey: 'workout_id'
// });

// Employer.hasMany(User, {
//   foreignKey: 'user_id'
// });

// User.belongsTo(Employer, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Workout, Comment, Employer };