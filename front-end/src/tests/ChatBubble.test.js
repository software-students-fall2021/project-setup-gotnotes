import React from "react";
import { expect, assert } from "chai";
import { configure } from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ChatBubble from "../components/Mobile/ChatBubble/index.js";

configure({ adapter: new Adapter() });

describe("ChatBubble", () => {
  it("should render ChatBubble", () => {
    const wrapper = shallow(<ChatBubble />);

    expect(wrapper.containsAllMatchingElements([<ChatBubble />])).to.equal(
      true
    );
  });

  it("should exists", () => {
    assert.isDefined(ChatBubble);
  });
});
