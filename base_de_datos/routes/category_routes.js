const express = require('express');

let CategoriesController = require('../controllers/categories');

let router = express.Router();

router.route('/categories/new').get(CategoriesController.new); //formulario de creación
router.route('/categories').post(CategoriesController.create); //orden de creación
router.route('/categories/:id/edit').get(CategoriesController.edit);


router.route('/categories/:id')    
    .put(CategoriesController.update)
    .get(CategoriesController.show)
    .delete(CategoriesController.destroy)


module.exports = router;
