const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
const { GridFsStorage } = require("multer-gridfs-storage");

const { db_url } = require("./../Services/Database");

const storage = new GridFsStorage({
  url: db_url,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (_, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        const fileInfo = {
          filename: "",
          bucketName: "uploads",
        };

        if (err) return reject(err);

        fileInfo.filename =
          buf.toString("hex") + path.extname(file.originalname);

        resolve(fileInfo);
      });
    });
  },
});

module.exports = multer({ storage });
