const utilisateursController = require('../controller/utilisateursController')

// Initialize express router
const router = require('express').Router();
// Set default API response
router.get('/', utilisateursController.getUtilisateurs);
router.post('/', utilisateursController.addUtilisateurs);
router.get('/:id', utilisateursController.getUtilisateur);
router.put('/:id', utilisateursController.updateUtilisateur);
router.delete('/:id',utilisateursController.deleteUtilisateur);
// Export API routes
module.exports = router;