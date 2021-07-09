const paniersController = require('../controller/paniersController')

// Initialize express router
const router = require('express').Router();
// Set default API response
router.get('/', paniersController.getPaniers);
router.post('/', paniersController.addPaniers);
router.get('/:id', paniersController.getPanier);
router.put('/:id', paniersController.updatePanier);
router.delete('/:id',paniersController.deletePanier);
// Export API routes
module.exports = router;