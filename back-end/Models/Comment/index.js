var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    comment: {
        type: String,
        required: "Comment cannot be empty"
    },
    commentedAt: {
        type: Date,
        required: true
    },
    commentedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    parentCommentId: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        required: false
    },
    commentLikedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    commentDislikedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]

});

CommentSchema.virtual('commentDislikeCount').get(function () {
    return this.commentDislikedBy.length;
});

CommentSchema.virtual('commentLikeCount').get(function () {
    return this.commentLikedBy.length;
});


//Export model
module.exports = mongoose.model('Comment', CommentSchema);