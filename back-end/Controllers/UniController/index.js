const check_jwt = require("./../../Services/Auth");

const UniService = require("./../../Services/UniService");
const UserService = require("./../../Services/UserService");

// Display list of all unis.
exports.get_all_unis = async function (req, res) {
  res.json(await UniService.get_all_unis());
};

// Display detail page for a specific uni.
exports.get_uni_by_id = async function (req, res) {
  res.json(await UniService.get_uni_by_id(req.params.uniId));
};

// Handle uni create on POST.
exports.create_uni = async function (req, res) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { uniName, uniLogoPath } = req.body;

    if (!(uniName && uniLogoPath))
      throw new Error("Please include uniName and uniLogoPath in req.body");

    const jwtContents = check_jwt(token);

    if (!jwtContents)
      throw new Error("Your session is expired, please sign in again");

    const { user } = await UserService.get_user_by_email_or_username(
      jwtContents.email
    );

    if (!user.isAdmin)
      throw new Error("This action is restricted to only Admin accounts");

    const queryResult = await UniService.create_uni(uniName, uniLogoPath);

    if (queryResult.dbSaveError) throw new Error(dbSaveError);

    res.json([queryResult]);
  } catch (err) {
    res.send([{ error: err.message }]);
  }
};
/**
 * 
 * @param {*} req expects a req.body.updateData = {documentId: ObjectId, updateObject: object with some scalar keys of uni model and new values }, req.headers.authorization needs to include a "Bearer jwtTokenHere"
 * @param {*} res 
 * 
 */
exports.update_uni_scalar = async function (req, res) {
  //getting jwt token of the user
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { documentId, updateObject } = JSON.parse(req.body.updateData);

    if (!(documentId && updateObject))
      throw new Error(
        "Please provide a documentId for the Uni and an updateObject with relevant fields in req.body.updateData"
      );

    const jwtContents = check_jwt(token);

    if (!jwtContents)
      throw new Error("Your session is expired, please sign in again");

    const queryResult = await UniService.update_uni_scalar_by_uni_id(
      documentId,
      updateObject
    );

    if (!queryResult) throw new Error("No such Uni");

    res.json([queryResult]);
  } catch (err) {
    res.send([{ error: err.message }]);
  }
};

/**
 *
 * @param {*} req
 * expects a req.body.updateData = {
 * documentId: ObjectId,
 * type: "add"|"remove",
 * fieldName: string (needs to be the key of an arr field that exists in a user obj),
 * referenceId: ObjectId of the referenced obj to be added or removed}
 * @param {*} res
 */
exports.update_uni_arr = async function (req, res) {
  //getting jwt token of the user
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { documentId, type, fieldName, referenceId } = JSON.parse(
      req.body.updateData
    );

    if (!(documentId && type && fieldName && referenceId))
      throw new Error(
        "please provide a documentId, a type, fieldName, and referenceId is req.body.updateData"
      );

    const jwtContents = check_jwt(token);

    if (!jwtContents)
      throw new Error("Your session is expired, please sign in again");

    const { user } = await UserService.get_user_by_email_or_username(
      jwtContents.email
    );

    if (!user.isAdmin)
      throw new Error("This action is restricted to only Admin accounts");

    const uni = await UniService.get_uni_by_id(documentId);

    console.log(uni);
    const newArr = [];
    if (
      type === "add" &&
      !uni[fieldName].filter((obj) => obj._id == referenceId).length
    ) {
      newArr.push(referenceId, ...uni[fieldName]);
    } else if (type === "remove") {
      newArr.push(...uni[fieldName].filter((obj) => obj._id != referenceId));
    } else {
      throw new Error("Cannot add the same item twice");
    }

    const updateObject = {
      [fieldName]: newArr,
    };

    const queryResult = await UniService.update_uni_arr_by_uni_id(
      uni._id,
      updateObject
    );

    if (!queryResult) throw new Error("No such Uni");

    res.json([queryResult]);
  } catch (err) {
    res.send([{ error: err.message }]);
  }
};
