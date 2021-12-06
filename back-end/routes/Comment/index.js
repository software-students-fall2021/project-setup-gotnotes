var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var { commentController } = require("../../Controllers");

router.post("/", commentController.get_comments_by_file_id);

router.post("/user-like-dislike", commentController.update_user_like_dislike);

router.post("/create", commentController.create_comment);

router.post("/update-comment", commentController.update_comment);

module.exports = router;
