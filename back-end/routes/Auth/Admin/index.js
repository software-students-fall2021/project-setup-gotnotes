var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var {
  userController,
  courseController,
  uniController,
} = require("../../../Controllers");

router.post("/make-admin", userController.user_change_admin_status);

router.post("/create-course", (req, res) => {
  res.json([{ message: "not implemented" }]);
});
router.post("/create-uni", (req, res) => {
  res.json([{ message: "not implemented" }]);
});

module.exports = router;
