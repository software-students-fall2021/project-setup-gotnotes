const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const chai = require('chai');
const { expect } = chai;
chai.use(deepEqualInAnyOrder);

var ChatService = require('./index')
let chatData = ChatService.chatData
const testChat = chatData[0];

describe('ChatService', function () {
    describe('get_chatName()', function () {
        it('Should return chat data ', function () {

            const chat = UniService.get_chatName(testChat.chatID)

            expect(chat[0]).to.deep.equalInAnyOrder(testChat);

        });
    });
});