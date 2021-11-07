var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FileSchema = new Schema({
    fileName: {
        type: String,
        required: "File Name cannot be empty"
    },
    fileType: { type: String },
    fileShareDate: { type: Date },
    fileSharedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    fileLikedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    fileDislikedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    fileDownloads: { type: Number },
    fileComments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]

});

FileSchema.virtual('fileDislikeCount').get(function () {
    return this.fileDislikedBy.length;
});

FileSchema.virtual('fileLikeCount').get(function () {
    return this.fileLikedBy.length;
});

FileSchema.virtual('fileCommentCount').get(function () {
    let count = 0;
    this.fileComments.map(comment => {
        count++;
        comment.replies.map(reply => count++)
    })
    return count;
});


//Export model
module.exports = mongoose.model('File', FileSchema);