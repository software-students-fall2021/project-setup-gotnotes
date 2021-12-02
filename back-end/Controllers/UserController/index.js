require("dotenv").config();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION_MINUTES = process.env.JWT_EXPIRATION_MINUTES;
const { check_auth, check_auth_with_admin } = require("./../../Services/Auth");

const validate = require("./../../Services/Validation");

const UserService = require("./../../Services/UserService");
const UniService = require("./../../Services/UniService");

exports.login_user = async function (req, res) {
  const { usernameOrEmail, password } = req.body;

  if (!(usernameOrEmail && password)) {
    res.json([{ error: "Please enter all fields" }]);
    return;
  }
  try {
    const { user } = await UserService.get_user_by_email_or_username(
      usernameOrEmail
    );
    if (!user) throw new Error("Incorrect Password or Email");

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) throw new Error("Incorrect Password or Email");

    const token = jwt.sign(
      { email: user.email, username: user.username },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRATION_MINUTES }
    );

    res.json([{ token: `Bearer ${token}` }]);
  } catch (error) {
    res.json([{ error: error.message }]);
  }
};

exports.create_user = async function (req, res) {
  const { username, email, password, confirmPassword } = req.body;

  //extra backend validation for direct api calls
  if (!(username && email && password && confirmPassword)) {
    res.json([{ error: "Please enter all fields" }]);
    return;
  }
  try {
    const validationErr = validate(username, email, password, confirmPassword);
    if (validationErr) throw new Error(validationErr);

    const passwordHash = await bcrypt.hash(password, 10);

    const { user, dbSaveErr } = await UserService.create_user(
      email,
      username,
      passwordHash
    );
    if (dbSaveErr) throw new Error(dbSaveErr);

    const token = jwt.sign(
      { email: user.email, username: user.username },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRATION_MINUTES }
    );

    res.json([{ token: `Bearer ${token}` }]);
  } catch (error) {
    if (error.message.includes("E11000") && error.message.includes("email"))
      error.message = "A user with that email already exists";
    if (error.message.includes("E11000") && error.message.includes("username"))
      error.message = "A user with that username already exists";
    res.json([{ error: error.message }]);
  }
};

exports.user_change_admin_status = async function (req, res) {
  //getting jwt token of the user
  try {
    const { usernameOrEmail, isAdminNew } = req.body;

    const user = await check_auth_with_admin(req);

    const queryResult = await UserService.make_admin(
      usernameOrEmail,
      isAdminNew
    );

    if (!queryResult) throw new Error("No such user");

    res.json([queryResult]);
  } catch (err) {
    res.send([{ error: err.message }]);
  }
};

exports.update_user_scalar = async function (req, res) {
  //getting jwt token of the user
  try {
    const updateObject = JSON.parse(req.body.updateData);
    const user = await check_auth(req);

    const queryResult =
      await UserService.update_user_scalar_by_email_or_username(
        jwtContents.email,
        updateObject
      );

    if (!queryResult) throw new Error("No such user");

    res.json([queryResult]);
  } catch (err) {
    res.send([{ error: err.message }]);
  }
};

exports.update_user_arr = async function (req, res) {
  try {
    const { type, fieldName, referenceId } = req.body.updateData;
    const user = await check_auth(req);

    const queryResult = await UserService.update_user_arr_by_email_or_username(
      jwtContents.email,
      user,
      type,
      fieldName,
      referenceId
    );

    if (!queryResult) throw new Error("No such user");

    res.json([queryResult]);
  } catch (err) {
    res.send([{ error: err.message }]);
  }
};

// Display detail page for a specific user.
exports.user_detail = async function (req, res) {
  try {
    const user = await check_auth(req);

    res.json(user);
  } catch (err) {
    res.send([{ error: err.message }]);
  }
};

// Display list of all users.
exports.user_list = function (req, res) {
  res.send("NOT IMPLEMENTED: user list: ");
};
