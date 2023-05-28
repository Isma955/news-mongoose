const { Router } = require('express');
const { commentController } =require ('../controllers/comments.controller')

const router = Router();


router.post('/comment',commentController.postCommentNews)
router.delete('/comment', commentController.deleteComment)
router.get('/comment',commentController.showAllComments)



module.exports = router;