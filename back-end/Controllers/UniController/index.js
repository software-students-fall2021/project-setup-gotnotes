const { check_auth, check_auth_with_admin } = require("./../../Services/Auth");

const UniService = require("./../../Services/UniService");
const UserService = require("./../../Services/UserService");

exports.get_all_unis = async function (req, res) {
  try {
    res.json(await UniService.get_all_unis());
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};

exports.get_uni_by_id = async function (req, res) {
  try {
    res.json(await UniService.get_uni_by_id(req.params.uniId));
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};

// Handle uni create on POST.
exports.create_uni = async function (req, res) {
  try {
    const user = await check_auth_with_admin(req);
    console.log(req.body)
    const { uniName, uniLogoPath } = req.body;

    if (!(uniName && uniLogoPath))
      throw new Error("Please include uniName and uniLogoPath in req.body");

    const queryResult = await UniService.create_uni(uniName, uniLogoPath);

    if (queryResult.dbSaveError) throw new Error(dbSaveError);

    res.json([queryResult]);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};
/**
 *
 * @param {*} req expects a req.body = {documentId: ObjectId, updateObject: object with some scalar keys of uni model and new values }, req.headers.authorization needs to include a "Bearer jwtTokenHere"
 * @param {*} res
 *
 */
exports.update_uni_scalar = async function (req, res) {
  //getting jwt token of the user
  try {
    const user = await check_auth_with_admin(req);
    const { documentId, updateObject } = req.body;

    if (!(documentId && updateObject))
      throw new Error(
        "Please provide a documentId for the Uni and an updateObject with relevant fields in req.body"
      );

    const queryResult = await UniService.update_uni_scalar_by_uni_id(
      documentId,
      updateObject
    );

    if (!queryResult) throw new Error("No such Uni");

    res.json([queryResult]);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};

/**
 *
 * @param {{authorization: "Bearer jwtToken", body: {documentId: String, type: "add"|"remove", fieldName: String, referenceId: String}}} req
 * @param {*} res
 */
exports.update_uni_arr = async function (req, res) {
  try {
    const { documentId, type, fieldName, referenceId } = req.body;
    if (!(documentId && type && fieldName && referenceId))
      throw new Error(
        "please include a documentId, type, fieldName, and referenceId in req.body"
      );

    const user = await check_auth_with_admin(req);

    const uni = await UniService.get_uni_by_id(documentId);

    const queryResult = await UniService.update_uni_arr_by_uni_id(
      uni,
      type,
      fieldName,
      referenceId
    );

    if (!queryResult) throw new Error("No such Uni");

    res.json([queryResult]);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};

/**
 * 
 * @param {{authorization: "Bearer jwtToken", body: {documentId: String, type: "add"|"remove"}}} req 
 * @param {*} res 
 */
exports.update_user_enrollment = async function (req, res) {
  try {
    const user = await check_auth(req);
    
    const { documentId, type } = req.body;
    if (!(documentId && type))
      throw new Error("please include a documentId, type in req.body");

    const uni = await UniService.get_uni_by_id(documentId);

    const queryResult = await UniService.update_uni_arr_by_uni_id(
      uni,
      type,
      "uniStudents",
      user._id
    );

    if (!queryResult) throw new Error("No such Uni");

    const addUniToUser =
      type === "add"
        ? await UserService.update_user_scalar_by_email_or_username(
            user.email,
            {
              userUni: documentId,
            }
          )
        : await UserService.update_user_scalar_by_email_or_username(
            user.email,
            {
              userUni: null,
            }
          );

    res.json([queryResult]);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};
