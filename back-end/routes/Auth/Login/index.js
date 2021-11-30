var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var { userController } = require("../../../Controllers");

router.post("/", userController.login_user);


module.exports = router;
