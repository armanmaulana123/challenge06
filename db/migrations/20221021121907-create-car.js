'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Cars',
        'id_user', 
        {
        type: Sequelize.INTEGER,
        }
      ),
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};
