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
      { name: 'Vendor alat kesehatan', address: 'Tanggerang, Banten', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mitra tenaga IT', address: 'Jl. Kemang, Jakarta Selatan, Jakarta', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mitra tenaga OB', address: 'Jl. Utara No.1, Jakarta', createdAt: new Date(), updatedAt: new Date() }
    ]);

    await queryInterface.bulkInsert('Users', [
      { username: 'admin', password: 'admin', createdAt: new Date(), updatedAt: new Date() }
    ]);

    const hospitalVendorData = [
      { HospitalId: 1, VendorId: 1, createdAt: new Date(), updatedAt: new Date() },
      { HospitalId: 1, VendorId: 2, createdAt: new Date(), updatedAt: new Date() },
      { HospitalId: 1, VendorId: 3, createdAt: new Date(), updatedAt: new Date() },
      { HospitalId: 2, VendorId: 2, createdAt: new Date(), updatedAt: new Date() },
    ];
    await queryInterface.bulkInsert('HospitalVendor', hospitalVendorData);
  },

  async down(queryInterface, Sequelize) {
    // Reset data
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Vendors', null, {});
    await queryInterface.bulkDelete('Hospitals', null, {});
    await queryInterface.bulkDelete('HospitalVendor', null, {});
  }
};