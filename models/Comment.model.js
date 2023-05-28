const mongoose = require('mongoose')

const commentSchema = mongoose.Schema ( {
    userName : String,
    text : String,
    forNews : {
        ref : 'News',
        type : mongoose.SchemaTypes.ObjectId
    }
})

const Comment = mongoose.model('Comments',commentSchema)

module.exports = Comment