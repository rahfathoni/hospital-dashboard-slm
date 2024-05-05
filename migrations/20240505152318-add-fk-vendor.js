'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hospitals', {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    });

    await queryInterface.createTable('Vendors', {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hospitalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Hospitals',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vendors');
    await queryInterface.dropTable('Hospitals');
  }
};
