const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Employer model
class Employer extends Model {}
// create fields/columns for Employer model
Employer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      employer_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'employer'
    }
  );

  module.exports = Employer;