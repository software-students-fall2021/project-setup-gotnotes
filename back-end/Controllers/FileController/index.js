const { check_auth } = require("./../../Services/Auth");

const mongoose = require("mongoose");
const Grid = require("gridfs-stream");

const FileService = require("./../../Services/FileService");
const UserService = require("./../../Services/UserService");
const upload = require("./../../Middleware");

let gfs;
const conn = mongoose.connection;

conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

exports.get_all_files = async (req, res) => {
  res.json(await FileService.get_all_files());
};
exports.get_file_by_id = async (req, res) => {
  res.json(await FileService.get_file_by_id(req.body.fileId));
};
exports.get_file_stream = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};
exports.create_file = async (req, res) => {
  try {
    const user = await check_auth(req);
    const { fileName, fileLink, fileType } = req.body;

    if (!(fileName && fileLink && fileType))
      throw new Error(
        "Please include fileName and fileLink and fileType in req.body"
      );

    const queryResult = await FileService.create_file(
      fileName,
      fileLink,
      fileType,
      Date.now(),
      user._id
    );

    if (queryResult.dbSaveError) throw new Error(dbSaveError);

    const addFileToUser =
      await UserService.update_user_arr_by_email_or_username(
        user.email,
        user,
        "add",
        "shared",
        queryResult.file._id
      );

    res.json([queryResult]);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};

exports.upload_file = upload.single("file");

exports.get_file_link = async (req, res) => {
  try {
    const user = await check_auth(req);
    if (req.file === undefined) throw new Error("Please include a file");
    const fileUrl = `http://localhost:${process.env.PORT}/files/uploads/${req.file.filename}`;
    res.json([{ uri: fileUrl }]);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};

exports.update_file_scalar_by_file_id = async (req, res) => {
  try {
    const user = await check_auth(req);
    const { documentId, updateObject } = JSON.parse(req.body);

    if (!(documentId && updateObject))
      throw new Error(
        "Please provide a documentId for the Uni and an updateObject with relevant fields in req.body"
      );

    const queryResult = await FileService.update_file_scalar_by_file_id(
      documentId,
      updateObject
    );

    if (!queryResult) throw new Error("No such File");

    res.json([queryResult]);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};

exports.update_file_arr_by_file_id = async (req, res) => {
  try {
    const { documentId, type, fieldName, referenceId } = JSON.parse(req.body);
    if (!(documentId && type && fieldName && referenceId))
      throw new Error(
        "please include a documentId, type, fieldName, and referenceId in req.body"
      );

    const user = await check_auth(req);

    const file = await FileService.get_file_by_id(documentId);

    const queryResult = await FileService.update_file_arr_by_file_id(
      file,
      type,
      fieldName,
      referenceId
    );

    if (!queryResult) throw new Error("No such File");

    res.json([queryResult]);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};

exports.update_user_like_dislike = async (req, res) => {
  try {
    const { documentId, type, likeDislike } = JSON.parse(req.body);
    if (!(documentId && type && likeDislike))
      throw new Error("please include a documentId, type in req.body");

    const user = await check_auth(req);

    const fieldName = likeDislike === "like" ? "likes" : "dislikes";

    const addFileToUser =
      await UserService.update_user_arr_by_email_or_username(
        user.email,
        user,
        type,
        fieldName,
        documentId
      );

    const file = await FileService.get_file_by_id(documentId);

    const queryResult = await FileService.update_file_arr_by_file_id(
      file,
      type,
      fieldName,
      user._id
    );

    if (!queryResult) throw new Error("No such File");

    res.json([queryResult]);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};

//concurrent deletion of both file meta data and the chunks
exports.delete_file = async (req, res) => {
  try {
    const user = await check_auth(req);
    const { fileId } = req.body;
    if (!fileId) throw new Error("please include fileId");
    const file = FileService.get_file_by_id(fileId);
    if (file.sharedBy.toString() != user._id)
      throw new Error("You can only delete a file you have shared");
    await FileService.delete_file_by_file_id(fileId);
    await gfs.files.deleteOne({ filename: req.params.filename });
    res.json([{ message: "success" }]);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};
