const User = require('./User');
const Comment = require('./Comment');

// associations
Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });

/*Comment.belongsTo(Workout, {
  foreignKey: 'workout_id'
});*/

User.hasMany(Comment, {
    foreignKey: 'user_id'
  });

/*Workout.hasMany(Comment, {
  foreignKey: 'workout_id'
});*/

module.exports = { User, Comment };