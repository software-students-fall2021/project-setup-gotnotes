const { check_auth } = require("./../../Services/Auth");

const UserService = require("./../../Services/UserService");
const CourseService = require("./../../Services/CourseService");
const ChatService = require("./../../Services/ChatService");

exports.check_is_user_member = async (req) => {
  const user = await check_auth(req);
  const courseId = req.body.courseId ? req.body.courseId : req.params.courseId;

  if (!courseId) throw new Error("Please include courseId in req.body");

  const course = await CourseService.get_course_by_id(courseId);

  if (
    !course.subscribed.filter(
      (userObj) => userObj._id.toString() == user._id.toString()
    ) > 0
  )
    throw new Error("You are not a member of this chat");

  return user;
};

/**
 *
 * @param {{headers: {Authorization: String}, params: {courseId: String}}} req
 * @param {*} res
 */
exports.get_chat_by_course_id = async (req, res) => {
  try {
    await exports.check_is_user_member(req);
    const chat = await ChatService.get_chat_by_course_id(req.params.courseId);
    res.json([chat]);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};

/**
 *
 * @param {String} courseId
 * @returns
 */
exports.create_chat = async (courseId) => {
  try {
    const queryResult = await ChatService.create_chat(
      course.courseName,
      courseId
    );
    if (!queryResult.chat) throw new Error(queryResult.dbSaveErr);

    return queryResult.chat;
  } catch (err) {
    return [{ error: err.message }];
  }
};

/**
 *
 * @param {{body: {courseId: String, message: String}}} req
 * @param {*} res
 */
exports.create_message = async (req, res) => {
  try {
    const user = await exports.check_is_user_member(req);
    const { courseId, message } = req.body;
    if (!(courseId && message)) throw new Error("Message cannot me empty");

    const chatMessage = await ChatService.create_message(
      courseId,
      message,
      user._id.toString()
    );
    res.json([chatMessage]);
  } catch (err) {
    if (err.message.includes("Cast to ObjectId"))
      err.message = "No Such Course";
    res.json([{ error: err.message }]);
  }
};

/**
 *
 * @param {{body: {messageId: String, courseId: String}}} req
 * @param {*} res
 */
exports.update_like_message_toggle = async (req, res) => {
  try {
    const user = await exports.check_is_user_member(req);
    console.log(user);
    const { messageId, courseId } = req.body;
    if (!messageId)
      throw new Error("Please include messageId and courseId req.body");
    await ChatService.update_like_message(messageId, user._id);
    const chat = await ChatService.get_chat_by_course_id(courseId);
    res.json([{ chat }]);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};
