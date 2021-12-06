const mongoose = require("mongoose");

const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");

const { db, db_url } = require("./../Database");

exports.fileUploadService = {
  gridFs: null,
  storage: null,
  upload: null,
};

db.once("open", () => {
  exports.fileUploadService.gridFS = Grid(db.db, mongoose.mongo);
  exports.fileUploadService.gridFS.collection("uploads");
});

// Create storage engine
exports.fileUploadService.storage = new GridFsStorage({
  url: db_url,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
exports.fileUploadService.upload = multer({ storage: exports.storage });


