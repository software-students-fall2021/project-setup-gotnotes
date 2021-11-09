var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id: {
        type: String,
        required: "Email cannot be empty"
    },
    username: {
        type: String,
        required: "Username cannot be empty",
        unique: true
    },
    passwordHash: { type: String },
    isAdmin: { type: Boolean },
    userAvatarUrl: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    userUni: {
        type: Schema.Types.ObjectId,
        ref: 'Uni'
    },
    userSubscribed: [{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }],
    userLiked: [{
        type: Schema.Types.ObjectId,
        ref: 'File'
    }],
    userDisliked: [{
        type: Schema.Types.ObjectId,
        ref: 'File'
    }],
    userComments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]

});

UserSchema.virtual('email').get(function () {
    return this._id;
});


//virtual needed for like dislike comment counts

//Export model
module.exports = mongoose.model('User', UserSchema);