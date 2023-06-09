'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User,{
        as: 'user'
      });
      //Relación N a N
      Task.belongsToMany(models.Category,{
        through:'TaskCategories',
        as:'categories'
      })
    }
  }
  Task.init({
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};