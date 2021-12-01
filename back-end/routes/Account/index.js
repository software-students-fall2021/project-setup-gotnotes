var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var { userController } = require("../../Controllers");

router.get("/", userController.user_detail);

router.post("/edit-scalar", userController.update_user_scalar);

router.post("/edit-arr", userController.update_user_arr);

module.exports = router;
