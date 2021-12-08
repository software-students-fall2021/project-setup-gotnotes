import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import ChatBubble from './src/components/Mobile/ChatBubble/index';


describe('ChatBubble', () => {

    it('should render ChatBubble', () => {

        const wrapper = shallow(<ChatBubble />);

        expect(wrapper.containsAllMatchingElements([

            <ChatBubble />,

        ])).to.equal(true);
    });

    it('should exists', () => {

        assert.isDefined(ChatBubble)
    })
});
