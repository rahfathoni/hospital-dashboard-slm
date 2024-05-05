'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Hospitals', [
      { name: 'Siloam Lippo Village', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Siloam Bogor', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Siloam Makassar', createdAt: new Date(), updatedAt: new Date() }
    ]);

    await queryInterface.bulkInsert('Vendors', [
      { name: 'Vendor alat kesehatan', hospitalId: 1, address: 'Tanggerang, Banten', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mitra tenaga IT', hospitalId: 2, address: 'Jl. Kemang, Jakarta Selatan, Jakarta', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mitra tenaga OB', hospitalId: 1, address: 'Jl. Utara No.1, Jakarta', createdAt: new Date(), updatedAt: new Date() }
    ]);

    await queryInterface.bulkInsert('Users', [
      { username: 'admin', password: 'admin', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Reset data
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Vendors', null, {});
    await queryInterface.bulkDelete('Hospitals', null, {});
  }
};