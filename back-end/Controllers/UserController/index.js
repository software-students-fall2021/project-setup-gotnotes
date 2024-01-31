require("dotenv").config();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION_MINUTES = process.env.JWT_EXPIRATION_MINUTES;
const {
  check_auth,
  check_auth_with_admin,
  check_refresh_token,
} = require("./../../Services/Auth");

const validate = require("./../../Services/Validation");

const UserService = require("./../../Services/UserService");

//TODO refresh tokens need to be implemented
exports.refresh = async (req, res) => {
  try {
    const refresh_token = req.cookies?.refresh_token;
    const user = await check_refresh_token(refresh_token);

    const token = jwt.sign(
      { email: user.email, username: user.username },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRATION_MINUTES }
    );

    res.json({
      token: `Bearer ${token}`,
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        userAvatarUrl: user.userAvatarUrl,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        userUni: user.userUni,
        subscribed: user.subscribed,
        likes: user.likes,
        dislikes: user.dislikes,
        comments: user.comments,
        shared: user.shared,
      },
    });
  } catch (err) {
    res.send({ error: err.message });
  }
};

exports.logout_user = async (req, res) => {
  try {
    let options = {
      maxAge: 1000 * 60 * 60 * 24 * 2, // would expire after 2 days
      httpOnly: true, // The cookie only accessible by the web server
    };

    res.cookie("refresh_token", null, options);
    res.json({ success: "Logged out successfully" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

exports.login_user = async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;

    if (!(usernameOrEmail && password))
      throw new Error("Please enter all fields");

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

    let options = {
      maxAge: 1000 * 60 * 60 * 24 * 2, // would expire after 2 days
      httpOnly: true, // The cookie only accessible by the web server
    };

    const refresh_token = jwt.sign(
      { email: user.email, username: user.username },
      JWT_SECRET,
      { expiresIn: options.maxAge }
    );

    res.cookie("refresh_token", refresh_token, options);
    res.json({
      token: `Bearer ${token}`,
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        userAvatarUrl: user.userAvatarUrl,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        userUni: user.userUni,
        subscribed: user.subscribed,
        likes: user.likes,
        dislikes: user.dislikes,
        comments: user.comments,
        shared: user.shared,
      },
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

exports.signup_user = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  //extra backend validation for direct api calls
  if (!(username && email && password && confirmPassword)) {
    res.json({ error: "Please enter all fields" });
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

    let options = {
      maxAge: 1000 * 60 * 60 * 24 * 2, // would expire after 2 days
      httpOnly: true, // The cookie only accessible by the web server
    };

    const refresh_token = jwt.sign(
      { email: user.email, username: user.username },
      JWT_SECRET,
      { expiresIn: options.maxAge }
    );

    res.cookie("refresh_token", refresh_token, options);

    res.json({
      token: `Bearer ${token}`,
      user: {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        userUni: user.userUni,
        subscribed: user.subscribed,
        userAvatarUrl: user.userAvatarUrl,
        likes: user.likes,
        dislikes: user.dislikes,
        comments: user.comments,
        shared: user.shared,
      },
    });
  } catch (error) {
    if (error.message.includes("E11000") && error.message.includes("email"))
      error.message = "A user with that email already exists";
    if (error.message.includes("E11000") && error.message.includes("username"))
      error.message = "A user with that username already exists";
    res.status(500).json([{ error: error.message }]);
  }
};

// Display detail page for a specific user.
exports.get_current_user = async (req, res) => {
  try {
    const user = await check_auth(req);
    res.json({
      _id: user._id,
      userAvatarUrl: user.userAvatarUrl,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      userUni: user.userUni,
      subscribed: user.subscribed,
      likes: user.likes,
      dislikes: user.dislikes,
      comments: user.comments,
      shared: user.shared,
    });
  } catch (err) {
    res.send({ error: err.message });
  }
};

exports.user_change_admin_status = async (req, res) => {
  //getting jwt token of the user
  try {
    const { usernameOrEmail, isAdminNew } = req.body;

    const user = await check_auth_with_admin(req);

    const queryResult = await UserService.make_admin(
      usernameOrEmail,
      isAdminNew
    );

    if (!queryResult) throw new Error("No such user");

    res.json({
      _id: queryResult._id,
      firstName: queryResult.firstName,
      lastName: queryResult.lastName,
      username: queryResult.username,
      userAvatarUrl: queryResult.userAvatarUrl,
      email: queryResult.email,
      isAdmin: queryResult.isAdmin,
      userUni: queryResult.userUni,
      subscribed: queryResult.subscribed,
      likes: queryResult.likes,
      dislikes: queryResult.dislikes,
      comments: queryResult.comments,
      shared: queryResult.shared,
    });
  } catch (err) {
    res.send({ error: err.message });
  }
};

exports.update_user_scalar = async (req, res) => {
  //getting jwt token of the user
  try {
    const updateObject = req.body;
    const user = await check_auth(req);

    updateObj.keys;

    const queryResult =
      await UserService.update_user_scalar_by_email_or_username(
        user.email,
        updateObject
      );

    if (!queryResult) throw new Error("No such user");

    res.json({
      _id: queryResult._id,
      firstName: queryResult.firstName,
      lastName: queryResult.lastName,
      username: queryResult.username,
      email: queryResult.email,
      userAvatarUrl: queryResult.userAvatarUrl,
      isAdmin: queryResult.isAdmin,
      userUni: queryResult.userUni,
      subscribed: queryResult.subscribed,
      likes: queryResult.likes,
      dislikes: queryResult.dislikes,
      comments: queryResult.comments,
      shared: queryResult.shared,
    });
  } catch (err) {
    res.send({ error: err.message });
  }
};

exports.update_user_arr = async (req, res) => {
  try {
    const { type, fieldName, referenceId } = req.body;
    const user = await check_auth(req);

    const queryResult = await UserService.update_user_arr_by_email_or_username(
      user.email,
      user,
      type,
      fieldName,
      referenceId
    );

    if (!queryResult) throw new Error("No such user");

    res.json({
      _id: queryResult._id,
      firstName: queryResult.firstName,
      lastName: queryResult.lastName,
      username: queryResult.username,
      email: queryResult.email,
      isAdmin: queryResult.isAdmin,
      userUni: queryResult.userUni,
      userAvatarUrl: queryResult.userAvatarUrl,
      subscribed: queryResult.subscribed,
      likes: queryResult.likes,
      dislikes: queryResult.dislikes,
      comments: queryResult.comments,
      shared: queryResult.shared,
    });
  } catch (err) {
    res.send({ error: err.message });
  }
};
