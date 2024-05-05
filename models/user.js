'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: `username already exist`
      },
      validate: {
        notEmpty: {
          args: true,
          msg: `username must be filled`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `password must be filled`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};