'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('HospitalVendor', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      HospitalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Hospitals',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      VendorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Vendors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('HospitalVendor');
  }
};
