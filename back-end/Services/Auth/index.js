const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const UserService = require("./../UserService");

exports.check_jwt = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return false;
  }
};

exports.check_auth = async (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new Error("Please Sign in");

  const token = authHeader.split(" ")[1];

  const jwtContents = exports.check_jwt(token);

  if (!jwtContents)
    throw new Error("Your session is expired, please sign in again");

  const { user } = await UserService.get_user_by_email_or_username(
    jwtContents.email
  );

  if (!user) throw new Error("No such user");

  return user;
};

exports.check_auth_with_admin = async (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new Error("Please Sign in");

  const token = authHeader.split(" ")[1];

  const jwtContents = exports.check_jwt(token);

  if (!jwtContents)
    throw new Error("Your session is expired, please sign in again");

  const { user } = await UserService.get_user_by_email_or_username(
    jwtContents.email
  );

  if (!user) throw new Error("No such User");
  if (!user.isAdmin) return false;

  return user;
};
