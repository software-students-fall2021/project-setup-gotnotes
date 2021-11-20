const { use } = require('chai');
let chatData = require('./../../Mock/ChatsMockData/chats.json')
var mongoose = require("mongoose");
var axios = require("axios");
var db = mongoose.connection;
import chat from '../../Models/Chat/index'
// Comment By Mark Zarutin
/**
 * Get chat by courseID and chatName
 * @param {courseID} courseID
 * @param {chatName} chatName
 */

exports.addChat = (courseID, chatName) => {
    let chat_instance = new chat({
        courseID: courseID,
        chatName: chatName,
        chatMembers: [],
        chatContent: []
    })
    chat_instance.save(function (err) {
        if (err) {
            console.log(err);
        }
    })
}
/**
 * Adds message by courseID and chatName
 * @param {courseID} courseID
 * @param {chatName} chatName
 * @param {message} message
 * @param {messageBy} messageBy
 */
exports.addMessage = (courseID, chatName, message, messageBy) => {
    // course ID and chat name are the same
    chat.findOne({ courseID: courseID, chatName: chatName }, function (err, chat) {
        if (err) {
            console.log(err);
        }
        else {
            chat.chatContent.push({
                message: message,
                messageBy: messageBy,
                messageDate: new Date(),
                messageLikedBy: []
            })
            chat.save(function (err) {
                if (err) {
                    console.log(err);
                }
            })
        }
    })
}
/**
 * Likes message by courseID, chatName, userID, and message
 * @param {courseID} courseID
 * @param {chatName} chatName
 * @param {message} message
 * @param {userID} userID
 */
exports.like_message = (courseID, chatName, message, userID) => {
    // add try catch
    chat.findOne({ courseID: courseID, chatName: chatName }, function (err, chat) {
        if (err) {
            console.log(err);
        }
        else {
            chat.chatContent.findOne({ message: message }, function (err, content) {
                if (err) {
                    console.log(err);
                }
                else {
                    content.messageLikedBy.push(userID)
                    chat.save(function (err) {
                        if (err) {
                            console.log(err);
                        }
                    })
                }
            })
        }
    })
}
/**
 * Gets all chats for a courseID
 * @param {courseID} courseID
 * @returns {chat} || null
 */
exports.get_chatName = (courseID) => {
    chat.find({ courseID: courseID }, function (err, chat) {
        if (err) {
            console.log(err);
        }
        else {
            return chat.chatName
        }
    })
}
/**
 * Gets all chat users for a courseID and chatName
 * @param {courseID} courseID
 * @param {chatName} chatName
 * @returns {chat.chatMembers} || null
 */
exports.get_Chat_Users = (courseID, chatName) => {
    chat.findOne({ courseID: courseID, chatName: chatName }, function (err, chat) {
        if (err) {
            console.log(err);
        }
        else {
            return chat.chatMembers
        }
    })
}
/**
 * gets the entire chat object for a courseID and chatName
 * @param {courseID} courseID
 * @param {chatName} chatName
 * @returns {chat} || null
 */
exports.get_chat = (courseID, chatName) => {
    chat.findOne({ courseID: courseID, chatName: chatName }, function (err, chat) {
        if (err) {
            console.log(err);
        }
        else {
            return chat
        }
    })
}



// THESE ARE THE NON-DB FUNCTIONS
// /**
//  * Get chat by chatID
//  * @param {chatID} chatID
//  * @returns [{uniObj}] || []
//  */
//  exports.get_chat = function (chatID) {
//     return chatData.filter(chat => chat.chatID === chatID);
// }
// /**
//  * Adds a new uni to the database 
//  * @param {*} chatID is the primary key
//  * @param {*} uniID is the id of the university 
//  * @returns 0 if success, 1 of no such user
//  */
// exports.create_chat = function (uniID, chatName) {
//      //its not gone be like this when

//      var jsonFile= chatData;
//      var obj= JSON.parse(JSON.stringify(jsonFile));
//      let newChat = {
//         "chatID": obj.length + 1,
//         "uniID": uniID,
//         "chatName": chatName,
//         "chatMembers": [],
//         "chatContent": [],
//       };

//       obj.push(newChat);
//       jsonStr= JSON.stringify(obj);
//       return 1; 
// }

// exports.add_student_to_chat = function (chatID, userID, userName) {
//     let chat = chatData.filter(chat => chat.chatID === chatID);
//     chat[0].chatMembers.push({userID: userID, userName: userName});
//     chatData.push(chat);
//     // console.log(chat[0].chatMembers.filter(member => member.userID === userID));
// }
// // add_student_to_chat(1, 34, "Mark");
// // console.log(chatData[0].chatMembers.filter(member => member.userName === "Mark"));

// /**
//  * Get uni by its university name
//  * @param {chatID} chatID 
//  * @returns [{uniObj}] || []
//  */
//  exports.get_chat_chatName = function (chaID) {
//      const chat= get_chat(chatID);
//      if(chat?.chatName){
//          return chat.chatName;
//      }
//      return null;
// }

// exports.add_message_to_chat = function (chatID, message, userID, userName) {
//     let addition = {
//         "message":message,
//         "messageBy":userID,
//         "messageDate": new Date(),
//         "messageLikedBy":[]
//     }
//     let chat = chatData.filter(chat => chat.chatID === chatID);
//     if(!chat){
//         return null;
//     }
//     chat[0].chatContent.push(addition);
//     chatData.push(chat);
//     return 1;
// }
// exports.like_message = function (chatID, message, userID) {
//     let like = { "userID": userID };
//     let chat = chatData.filter(chat => chat.chatID === chatID);
//     if(!chat){
//         return null;
//     }
//     chat[0].chatContent.filter(message => message.message === message).messageLikedBy.push(like);
//     chatData.push(chat);
//     return 1;
// }