const Chat = require("../../Models/Chat/Chat");
const Message = require("../../Models/Chat/Message");

exports.get_chat_by_id = async (chatId) => {
  return await Chat.findOne({ _id: chatId }).populate({
    path: "content",
    model: "Message",
    populate: { path: "sender", model: "User" },
  });
};
exports.get_chat_by_course_id = async (courseId) => {
  return await Chat.findOne({ courseId: courseId }).populate({
    path: "content",
    model: "Message",
    populate: { path: "sender", model: "User" },
  });
};

/**
 *
 * @param {String} courseId
 * @param {String} name
 * @param {[String] | null} members
 * @returns
 */
exports.create_chat = async (courseId, name) => {
  const returnObj = {
    chat: null,
    dbSaveErr: false,
  };
  let new_chat = new Chat({
    name: name,
    courseId: courseId,
    content: [],
  });

  await new_chat
    .save()
    .then(async (chat) => {
      returnObj.chat = await chat;
    })
    .catch((err) => (returnObj.dbSaveErr = err));

  return returnObj;
};

exports.update_chat_scalar_by_chat_id = async (chatId, updateObject) => {
  return await Uni.findOneAndUpdate(
    { _id: chatId },
    { $set: updateObject },
    { new: true }
  ).populate({
    path: "content",
    model: "Message",
    populate: { path: "sender", model: "User" },
  });
};

exports.update_chat_arr = async (
  chat,
  type,
  fieldName,
  referenceId,
  updateObjOptional
) => {
  const newArr = [];
  if (referenceId) {
    if (
      type === "add" &&
      !chat[fieldName].filter(
        (obj) => obj._id.toString() == referenceId.toString()
      ).length
    ) {
      newArr.push(referenceId, ...chat[fieldName]);
    } else if (type === "remove") {
      newArr.push(
        ...chat[fieldName].filter(
          (obj) => obj._id.toString() != referenceId.toString()
        )
      );
    } else {
      throw new Error("Cannot add item twice");
    }
  }

  const updateObject = updateObjOptional
    ? updateObjOptional
    : {
        [fieldName]: newArr,
      };

  return await Chat.findOneAndUpdate(
    { _id: chat._id },
    { $set: updateObject },
    { new: true }
  );
};

exports.create_message = async (courseId, message, sender) => {
  const new_message = new Message({
    message: message,
    sender: sender,
    dateSent: Date.now(),
    likes: [],
  });

  return await new_message.save().then(async (message) => {
    return await Chat.findOneAndUpdate(
      { courseId: courseId },
      { $push: { content: message._id } },
      { new: true }
    ).populate({
      path: "content",
      model: "Message",
      populate: { path: "sender", model: "User" },
    });
  });
};

exports.update_like_message = async (messageId, userId) => {
  const message = await Message.findOne({ _id: messageId });
  console.log(userId.toString());
  if (
    message.likes.filter((likedUserId) => {
      console.log(likedUserId);
      return likedUserId == userId.toString();
    }).length > 0
  ) {
    return await Message.findOneAndUpdate(
      { _id: messageId },
      { $pull: { likes: userId.toString() } }
    ).populate("sender");
  } else {
    console.log(userId, "here");
    return await Message.findOneAndUpdate(
      { _id: messageId },
      { $push: { likes: userId.toString() } }
    ).populate("sender");
  }
};
