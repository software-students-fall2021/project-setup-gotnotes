var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var { userController } = require("../../Controllers");

//just get the details of the user
router.get("/", userController.get_current_user);

//editing scalar type fields of the user
router.post("/edit-scalar", userController.update_user_scalar);

//editing arr type fields of the user
router.post("/edit-arr", userController.update_user_arr);

module.exports = router;
