const { Router } = require('express');
const { newsController } = require('../controllers/news.controller')

const router = Router();



router.post('/news',newsController.addNews)
router.delete('/news',newsController.deleteNews)
router.post('/news/:id',newsController.newsChange)
router.get('/news/some',newsController.showSomeNews)
router.get('/news',newsController.showAllNews)
router.get('/news/category/:id', newsController.showAllNewsCat)




module.exports = router;