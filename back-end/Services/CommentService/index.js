const commentData = require('./../../Mock/CommentsMockData/comments.json');
exports.commentData = commentData;


/**
 * Get a file by the fileID
 * @param {*} fileID 
 * @returns [{fileObj}] || []
 */
exports.get_comment = function (commentId) {
    return commentData.filter(comment => comment.commentId == commentId)
}
