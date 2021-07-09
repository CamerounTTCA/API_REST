const categoriesController = require('../controller/categoriesController')

// Initialize express router
const router = require('express').Router();
// Set default API response
router.get('/', categoriesController.getCategories);
router.post('/', categoriesController.addCategories);
router.get('/:id', categoriesController.getCategorie);
router.put('/:id', categoriesController.updateCategorie);
router.delete('/:id',categoriesController.deleteCategorie);
// Export API routes
module.exports = router;