var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var { commentController } = require("../../Controllers");

router.get("/:fileId", commentController.get_comments_by_file_id);

router.post("/create", commentController.create_comment);

router.post("/update-comment", commentController.update_comment);

router.post(
  "/like-dislike-comment",
  commentController.update_user_like_dislike
);

//TODO delete comment not implemented
router.post("/delete-comment", (req, res) => {
  res.json([{ error: "Comment Delete Not Implemented" }]);
});

module.exports = router;
