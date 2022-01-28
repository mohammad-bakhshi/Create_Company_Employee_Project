'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
   return await queryInterface.createTable('companies', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      registrationNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      province: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      registrationDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      telephoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('companies');
  }
};
