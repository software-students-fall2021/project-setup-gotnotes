const commentData = require('./../../Mock/CommentsMockData/comments.json');
import comment from '../../Models/Comment/index'
exports.commentData = commentData;
exports.count_comment = (comment) => {
    return comment.countDocuments({});
}

exports.make_comment = (Comment, commentedBy, parentCommentID) => {
    if (parentCommentID != null && parentCommentID != undefined && parentCommentID != '' && parentCommentID != 0) {
        let newComment = new comment({
            commentID: count_comment(comment) + 1,
            comment: Comment,
            commentedBy: commentedBy,
            parentCommentID: parentCommentID,
            commentedAt: new Date()
        })
    }
    else {
        let newComment = new comment({
            commentID: count_comment(comment) + 1,
            comment: Comment,
            commentedBy: commentedBy,
            commentedAt: new Date()
        })
    }
    newComment.save(err => {
        if (err) {
            console.log(err);
        }
    })
}

exports.like_comment = (commentID, likedBy) => {
    comment.findOne({ commentID: commentID }, (err, comment) => {
        if (err) {
            console.log(err);
        }
        else {
            comment.likedBy.push(likedBy);
            comment.save(err => {
                if (err) {
                    console.log(err);
                }
            })
        }
    })
}
exports.dislike_comment = (commentID, dislikedBy) => {
    comment.findOne({ commentID: commentID }, (err, comment) => {
        if (err) {
            console.log(err);
        }
        else {
            comment.dislikedBy.push(dislikedBy);
            comment.save(err => {
                if (err) {
                    console.log(err);
                }
            })
        }
    })
}

exports.get_comment = (commentID) => {
    return comment.findOne({ commentID: commentID });
}




/**
 * Get a file by the fileID
 * @param {*} fileID 
 * @returns [{fileObj}] || []
 */
exports.get_comment = function (commentId) {
    return commentData.filter(comment => comment.commentId == commentId)
}
