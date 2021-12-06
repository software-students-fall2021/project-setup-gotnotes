var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var { userController } = require("../../../Controllers");

router.post("/", userController.create_user);


module.exports = router;
