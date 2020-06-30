const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create our User model
class User extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  }

// define table columns and configuration
User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4]
        }
      },
      employer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'employer',
          key: 'id'
        }
      }
    },
    {
        hooks: {
            // set up beforeCreate
            async beforeCreate(newUserData) {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
            // set up beforeUpdate
            async beforeUpdate(updatedUserData) {
              updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
              return updatedUserData;
            }
          },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user'
    }
  );

module.exports = User;