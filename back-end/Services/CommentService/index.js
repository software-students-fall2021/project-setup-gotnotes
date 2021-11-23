const commentData = require('./../../Mock/CommentsMockData/comments.json');
const db = require('../Database/index')
const comment = require('../../Models/Comment/index')
exports.commentData = commentData;

exports.make_comment = (Comment, commentedBy, parentCommentID) => {

    // Look for _id
    let id = count_comment(comment)+ 1;
    if (parentCommentID != null && parentCommentID != undefined && parentCommentID != '' && parentCommentID != 0) {
        let newComment = new comment({
            comment: Comment,
            commentedBy: commentedBy,
            parentCommentID: parentCommentID,
            commentedAt: new Date()
        })
    }
    else {
        let newComment = new comment({
            comment: Comment,
            commentedBy: commentedBy,
            commentedAt: new Date()
        })
    }
    newComment.save(err,comment => {
        if (err) {
            console.log(err);
        }
        let id = comment._id
    })
    return id
}
exports.remove_comment = (commentID) => {
    comment.findOneAndDelete({_id: commentID}, (err, comment) => {
        if (err) {
            console.log(err);
        }
        else {
            comment.save(err => {
                console.log(err)
            })
        }
    })
}


exports.like_comment = (commentID, likedBy) => {
    comment.findOne({ _id: commentID }, (err, comment) => {
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
    comment.findOne({ _id: commentID }, (err, comment) => {
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
    return comment.findOne({ _id: commentID });
}



// NON DB FUNCTIONS
// /**
//  * Get a file by the fileID
//  * @param {*} fileID 
//  * @returns [{fileObj}] || []
//  */
// exports.get_comment = function (commentId) {
//     return commentData.filter(comment => comment.commentId == commentId)

