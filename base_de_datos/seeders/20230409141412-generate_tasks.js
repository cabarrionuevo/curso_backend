'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('tasks', [
      {id: 1, description: 'Grabar el curso de Backend',createdAt: new Date(),updatedAt: new Date()},
      {id: 2, description: 'Grabar el curso de Frontend',createdAt: new Date(),updatedAt: new Date()},
      {id: 3, description: 'Subir el curso',createdAt: new Date(),updatedAt: new Date()},    
    ], {});
  },

  async down (queryInterface, Sequelize) {
    //El parámetro tasks refiere al nombre de la tabla. ojo !
    await queryInterface.bulkDelete('tasks', null, {});

  }
};
