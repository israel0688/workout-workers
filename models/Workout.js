const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// create our Workout model
class Workout extends Model {}

// create fields/columns for Workout model
Workout.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      workout_type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      workout_amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'workout'
    }
  );

  module.exports = Workout;