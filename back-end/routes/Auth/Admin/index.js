var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var {
  userController,
  courseController,
  uniController,
} = require("../../../Controllers");

router.post("/make-admin", userController.user_change_admin_status);

router.post("/create-course", courseController.create_course);
router.post("/edit-course-scalar", courseController.update_course_scalar);
router.post("/edit-course-arr", courseController.update_course_arr);

router.post("/create-uni", uniController.create_uni);
router.post("/edit-uni-scalar", uniController.update_uni_scalar);
router.post("/edit-uni-arr", uniController.update_uni_arr);

module.exports = router;
