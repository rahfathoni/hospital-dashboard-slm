'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hospital.belongsToMany(models.Vendor, { through: 'HospitalVendor' });
    }
  }
  Hospital.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: `Hospital already exist`
      },
      validate: {
        notEmpty: {
          args: true,
          msg: `Name must be filled`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Hospital',
  });
  return Hospital;
};