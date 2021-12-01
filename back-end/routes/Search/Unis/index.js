var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var { uniController } = require("../../../Controllers");

//list all unis
router.get("/", uniController.get_all_unis);

//details of Uni
router.get("/:uniId", uniController.get_uni_by_id);

//enroll to a uni (logged in user only)
router.post("/create-uni", uniController.create_uni);

//enroll to a uni (logged in user only)
router.post("/edit-uni-scalar", uniController.update_uni_scalar);

//enroll to a uni (logged in user only)
router.post("/edit-uni-arr", uniController.update_uni_arr);

//enroll to a uni (logged in user only)
router.post("/delete-uni", (req, res) => {
  res.send("Enroll req to uni: UNI_NAME, by user: USER_ID");
});

module.exports = router;
