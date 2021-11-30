var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var { userController } = require("../../../Controllers");

router.post("/make-admin", userController.user_change_admin_status);


module.exports = router;
