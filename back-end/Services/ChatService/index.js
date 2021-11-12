const { use } = require('chai');
let chatData = require('./../../Mock/ChatsMockData/chats.json')

// Comment By Mark Zarutin
// add chat function
// get chat by chatID


//not addind addUni by university name or any specific key. If a university is added it should have
//everything containing uniID, uniName, uniLogoPath but it doesnt need uniStudent[] and UniCourses[]
// as there might not be any student registered. 


/**
 * Get chat by chatID
 * @param {chatID} chatID
 * @returns [{uniObj}] || []
 */
 exports.get_chat = function (chatID) {
    return chatData.filter(chat => chat.chatID === chatID);
}
/**
 * Adds a new uni to the database 
 * @param {*} uniID is the primary key
 * @param {*} uniName is the name of the university 
 * @param {*} uniLogPath is the path to the logo of the uni
 * @returns 0 if success, 1 of no such user
 */
exports.create_chat = function (uniID, chatName) {
     //its not gone be like this when

     var jsonFile= chatData;
     var obj= JSON.parse(JSON.stringify(jsonFile));
     let newChat = {
        "chatID": obj.length + 1,
        "uniID": uniID,
        "chatName": chatName,
        "chatMembers": [],
        "chatContent": [],
      };

      obj.push(newChat);
      jsonStr= JSON.stringify(obj);
      return 1; 
}

exports.add_student_to_chat = function (chatID, userID, userName) {
    let chat = chatData.filter(chat => chat.chatID === chatID);
    chat[0].chatMembers.push({userID: userID, userName: userName});
    chatData.push(chat);
    // console.log(chat[0].chatMembers.filter(member => member.userID === userID));
}
// add_student_to_chat(1, 34, "Mark");
// console.log(chatData[0].chatMembers.filter(member => member.userName === "Mark"));

/**
 * Get uni by its university name
 * @param {uniID} uniID 
 * @returns [{uniObj}] || []
 */
 exports.get_chat_chatName = function (chaID) {
     const chat= get_chat(chatID);
     if(chat?.chatName){
         return chat.chatName;
     }
     return null;
}

exports.add_message_to_chat = function (chatID, message, userID, userName) {
    let addition = {
        "message":message,
        "messageBy":userID,
        "messageDate": new Date(),
        "messageLikedBy":[]
    }
    let chat = chatData.filter(chat => chat.chatID === chatID);
    if(!chat){
        return null;
    }
    chat[0].chatContent.push(addition);
    chatData.push(chat);
    return 1;
}
exports.like_message = function (chatID, message, userID) {
    let like = { "userID": userID };
    let chat = chatData.filter(chat => chat.chatID === chatID);
    if(!chat){
        return null;
    }
    chat[0].chatContent.filter(message => message.message === message).messageLikedBy.push(like);
    chatData.push(chat);
    return 1;
}