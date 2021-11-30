require("dotenv").config();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION_MINUTES = process.env.JWT_EXPIRATION_MINUTES;
const check_jwt = require("./../../Services/Auth");

const validate = require("./../../Services/Validation");

const UserService = require("./../../Services/UserService");

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
    const token = req.headers.authorization.split(" ")[1];
    const { usernameOrEmail, isAdminNew } = req.body;

    const jwtContents = check_jwt(token);

    if (!jwtContents)
      throw new Error("Your session is expired, please sign in again");

    const { user } = await UserService.get_user_by_email_or_username(
      jwtContents.email
    );

    if (!user.isAdmin)
      throw new Error("This action is restricted to only Admin accounts");

    const queryResult = await UserService.make_admin(
      usernameOrEmail,
      isAdminNew
    );

    if (!queryResult) throw new Error("No such user");

    res.send([{ message: "success" }]);
  } catch (err) {
    res.send([{ error: err.message }]);
  }
};



// Display list of all users.
exports.user_list = function (req, res) {
  res.send("NOT IMPLEMENTED: user list: ");
};

// Display detail page for a specific user.
exports.user_detail = function (req, res) {
  const currentUser = UserService.get_user(req.body.userID);
  res.send(currentUser);

};

// Display user create form on GET.
exports.user_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: user create GET");
};

// Handle user create on POST.
exports.user_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: user create POST");
};

// Display user delete form on GET.
exports.user_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: user delete GET");
};

// Handle user delete on POST.
exports.user_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: user delete POST");
};

// Display user update form on GET.
exports.user_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: user update GET");
};

// Handle user update on POST.
exports.user_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: user update POST");
};
