var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var { fileController } = require("../../../Controllers");

//file chunks
router.post(
  "/upload",
  fileController.upload_file,
  fileController.get_file_link
);

router.get("/uploads/:filename", fileController.get_file_stream);
router.delete("/uploads/:filename", fileController.delete_file);

//file meta data
router.get("/", fileController.get_all_files);
router.get("/:fileId", fileController.get_file_by_id);
router.post("/create-file", fileController.create_file);
router.post("/edit-file-scalar", fileController.update_file_scalar_by_file_id);
router.post("/edit-file-arr", fileController.update_file_arr_by_file_id);
router.post("/like-dislike-file", fileController.update_user_like_dislike);


module.exports = router;
