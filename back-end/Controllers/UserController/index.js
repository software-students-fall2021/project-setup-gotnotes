/**
 * var { User } = require('./../../Models');
 * we will implement this when we have the mongodb models, schemas ...
 * */

const UserService = require("./../../Services/UserService");
const CourseService = require("./../../Services/CourseService");
// Display list of all users.
exports.user_list = function (req, res) {
  console.log(CourseService.get_course(req.params.courseID));

  const courseDataRaw = CourseService.get_course(req.params.courseID);
  const courseDataFull = courseDataRaw.map((course) => {
    return {
      ...course,
      courseEnrolledStudents: course.courseEnrolledStudents.map(({ _id }) => {
        return {
          _id,
          userName: UserService.get_user_by_id(_id)[0].userName,
        };
      }),
    };
  })
  res.send(courseDataFull);
};

// Display detail page for a specific user.
exports.user_detail = function (req, res) {
  const currentUser = UserService.get_user(req.body.userID);
  res.send(currentUser);
};

// Display user create form on GET.

// Handle user create on POST.
exports.user_create_post = function (req, res) {
  const data = req.body;
  const { userName, firstName, lastName, email } = data;
  UserService.user_create(userName, firstName, lastName, email);
  UserService.add_user_uni(userName, data.uniID);
  res.send(UserService.get_user(email));
};


// Handle user delete on POST.
exports.user_delete_post = function (req, res) {
  const data = req.body;
  const { userID } = data;
  UserService.user_delete(userID);
  res.send("userWentByeBye");
};



// Display user update form on GET.
exports.user_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: user update GET");
};

// Handle user update on POST.
exports.user_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: user update POST");
};
