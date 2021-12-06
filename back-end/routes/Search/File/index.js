var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var { fileController } = require("../../../Controllers");

const upload = require("./../../../Middleware");

//list file
router.get("/", fileController.get_all_files);

router.post("/upload", upload.single("file"), async (req, res) => {
  if (req.file === undefined) return res.send("you must select a file.");
  const imgUrl = `http://localhost:${process.env.PORT}/file/${req.file.filename}`;
  return res.send(imgUrl);
});

router.post("/:fileName", fileController.get_file_by_id);
router.post("/create-file", fileController.create_file);
router.post("/edit-file-scalar", fileController.update_file_scalar_by_file_id);
router.post("/edit-file-arr", fileController.update_file_arr_by_file_id);

router.post("/edit-user-like-dislike", fileController.update_user_like_dislike);

router.post("/delete_file", (req, res) => {
  res.json([{ message: "File delete not implemented" }]);
});
module.exports = router;
