const Comment = require('../models/Comment.model')

module.exports.commentController = {
    postCommentNews : async (req, res) => {
        const {userName, text,forNews} = req.body
        const commentNews = await Comment.create({
            userName,
            text,
            forNews
        })
        res.json(commentNews)
    },
    showAllComments : async (req, res) => {
        const showCommentNews = await Comment.find({forNews : req.body.forNews})
        .populate('forNews');
        res.json(showCommentNews)
    },
    deleteComment : async (req , res) => {
        const deleteComment = await Comment.deleteOne({_id : req.body._id});
        res.json(deleteComment)
    }
}

