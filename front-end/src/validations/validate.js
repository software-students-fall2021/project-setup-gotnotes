export default function validate({
  displayName,
  email,
  password,
  confirmPassword,
}) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const check = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  console.log(re.test(String(email).toLowerCase()));
  if (displayName === "") {
    const err = ["Full Name cannot be empty"];
    return err;
  } else if (email === "") {
    const err = ["Email cannot be empty"];
    return err;
  } else if (!re.test(String(email).toLowerCase())) {
    const err = ["Please enter a valid email"];

    return err;
  } else if (password.length < 8) {
    const err = ["password must be of minimum 8 characters"];
    return err;
  } else if (!check.test(password)) {
    const err = [
      "Password needs to contain at least:",
      "one uppercase letter",
      "one lowercase letter",
      "one number",
      "and one special character",
    ];

    return err;
  } else if (password !== confirmPassword) {
    const err = ["Passwords Don't Match"];

    return err;
  }
  return null;
}
