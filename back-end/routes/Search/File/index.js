var express = require("express");
var router = express.Router({ mergeParams: true });
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");

let gfs;

const conn = mongoose.connection;

conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

// Require controller modules.
var { fileController } = require("../../../Controllers");

const upload = require("./../../../Middleware");

//list file
router.get("/", fileController.get_all_files);

router.post("/create-file", fileController.create_file);

router.post("/upload", upload.single("file"), async (req, res) => {
  if (req.file === undefined)
    return res.json([{ error: "you must select a file." }]);
  const fileUrl = `http://localhost:${process.env.PORT}/files/uploads/${req.file.filename}`;
  return res.send(fileUrl);
});

router.get("/uploads/:filename", async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
});

router.delete("/uploads/:filename", async (req, res) => {
  try {
    await gfs.files.deleteOne({ filename: req.params.filename });
    res.json([{ message: "success" }]);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
});

router.post("/:fileName", fileController.get_file_by_id);
router.post("/create-file", fileController.create_file);
router.post("/edit-file-scalar", fileController.update_file_scalar_by_file_id);
router.post("/edit-file-arr", fileController.update_file_arr_by_file_id);

router.post("/edit-user-like-dislike", fileController.update_user_like_dislike);

module.exports = router;
