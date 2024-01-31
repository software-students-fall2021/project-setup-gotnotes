const emailCheckRegEx =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const passwordCheckRegEx = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_])(?=.{8,})"
);

const validate = (
  username,
  email,
  password,
  confirmPassword,
) => {
  const err = [];

  username === "" && err.push("Full Name cannot be empty");

  //prettier-ignore
  email === "" && 
    err.push("Email cannot be empty" );

  !emailCheckRegEx.test(String(email).toLowerCase()) &&
    err.push("Please enter a valid email");

  password.length < 8 && err.push("Password must be of minimum 8 characters");

  !passwordCheckRegEx.test(password) &&
    err.push([
      "Password needs to contain at least:",
      "one uppercase letter",
      "one lowercase letter",
      "one number",
      "and one special character",
    ]);

  password !== confirmPassword && err.push("Passwords Don't Match");

  return err.length === 0 ? null : err;
}

module.exports = validate