var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var { chatController } = require("../../Controllers");

//these are just internal functions that will be called by the courseController..
//we dont need api endpoints for them
//router.post("/create_chat", chatController.create_chat);
//router.post("/add_chat_member", chatController.add_chat_member);
//router.post("/remove_chat_member", chatController.remove_chat_member);

router.post("/create-message", chatController.create_message);
router.post("/like-message", chatController.update_like_message_toggle);

router.get("/:courseId", chatController.get_chat_by_course_id);

/*
we need a signed in user that is subscribed to this course for alll this...
new chat,
chat add person,
chat remove person,
chat get details,
new message,
like/unlike message,
delete message
*/

module.exports = router;
