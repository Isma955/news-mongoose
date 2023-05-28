const { Router } = require('express')
const { categoriesController } = require('../controllers/categories.controller')

const router = Router();




router.post('/categories',categoriesController.addCategorie)
router.delete('/categories',categoriesController.deleteCategorie)
router.get('/categories',categoriesController.showCategorie)


module.exports = router;