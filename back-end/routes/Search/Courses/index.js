var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var { courseController } = require("../../../Controllers");

//list all courses under that uni
router.get("/", courseController.get_all_courses);

router.get("/:courseId", courseController.get_course_by_id);

router.post("/create-course", courseController.create_course);

router.post("/edit-course-scalar", courseController.update_course_scalar);

router.post("/edit-course-arr", courseController.update_course_arr);

router.post("/update-subscription", courseController.update_user_subscription);

router.post("/delete-course", (req, res) => {
  res.json([{ message: "Delete course not yet implemented" }]);
});

module.exports = router;
