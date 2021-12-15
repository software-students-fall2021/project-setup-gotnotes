var express = require("express");
var router = express.Router({ mergeParams: true });

var { userController } = require("./../../Controllers")

router.get("/refresh", userController.refresh);
router.post("/login", userController.login_user);
router.post("/signup", userController.signup_user);
router.get('/logout', userController.logout_user);


module.exports = router;
