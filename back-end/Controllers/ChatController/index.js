const { check_auth } = require("./../../Services/Auth");

const UserService = require("./../../Services/UserService");
const CourseService = require("./../../Services/CourseService");
const ChatService = require("./../../Services/ChatService");

function check_is_user_member(req) {
  const user = check_auth(req);
  const { courseId } = req.body;

  const course = CourseService.get_course_by_id(courseId)

  if (!course.subscribed.filter(userObj => userObj._id.toString() == user._id.toString()) > 0)
    throw new Error("You are not a member of this chat");
  else return user;
}

/**
 *
 * @param {{body: {courseId: String}}} req
 * @param {*} res
 */
exports.get_chat_by_course_id = async (req, res) => {
  try {
    const user = await check_is_user_member(req);
    const chat = await ChatService.get_chat_by_course_id(req.body.courseId);
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
    const course = await CourseService.get_course_by_id(courseId);
    const members = course.subscribed.map((user) => user._id.toString());

    const queryResult = await ChatService.create_chat(
      course.courseName,
      courseId,
      members
    );
    if (!queryResult.chat) throw new Error(queryResult.dbSaveErr);

    return queryResult.chat;
  } catch (err) {
    return [{ error: err.message }];
  }
};

exports.add_chat_member = async (courseId, userId) => {
  try {
    const chat = await ChatService.get_chat_by_course_id(courseId);

    await ChatService.update_chat_arr(chat, "add", "members", userId);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};

exports.remove_chat_member = async () => {
  try {
    const chat = await ChatService.get_chat_by_course_id(courseId);

    await ChatService.update_chat_arr(chat, "remove", "members", userId);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};

/**
 *
 * @param {{body: {courseId: String, message: String}}} req
 * @param {*} res
 */
exports.create_message = async (req, res) => {
  try {
    const user = await check_is_user_member(req);
    const { courseId, message } = req.body;

    await ChatService.create_message(courseId, message, user._id.toString());
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};

/**
 *
 * @param {{body: {messageId: String, type: "add" | "remove"}}} req
 * @param {*} res
 */
exports.update_like_message = async (req, res) => {
  try {
    const user = await check_is_user_member(req);

    const { messageId, type } = req.body;
    await ChatService.update_like_message(messageId, type, user._id);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};
