var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var { fileController } = require("../../../Controllers");

const { fileUploadService } = require("./../../../Services/FileUploadService");

//list file
router.get("/", fileController.get_all_files);

router.post("/upload", fileUploadService.upload.single("file"), fileController.upload_file);

router.post("/:fileName", fileController.get_file_by_id);
router.post("/create-file", fileController.create_file);
router.post("/edit-file-scalar", fileController.update_file_scalar_by_file_id);
router.post("/edit-file-arr", fileController.update_file_arr_by_file_id);

router.post("/edit-user-like-dislike", fileController.update_user_like_dislike);

router.post("/delete_file", (req, res) => {
  res.json([{ message: "File delete not implemented" }]);
});
module.exports = router;
