var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var { uniController } = require("../../../Controllers");

//list all unis
router.get("/", uniController.get_all_unis);

//enroll to a uni (logged in user only)
router.post("/create-uni", uniController.create_uni);

//enroll to a uni (logged in user only)
router.post("/edit-uni-scalar", uniController.update_uni_scalar);

//enroll to a uni (logged in user only)
router.post("/edit-uni-arr", uniController.update_uni_arr);

router.post("/update-user-enrollment", uniController.update_user_enrollment);

//enroll to a uni (logged in user only)
router.post("/delete-uni", (req, res) => {
  res.json([{ message: "Delete uni not yet implemented" }]);
});

module.exports = router;
