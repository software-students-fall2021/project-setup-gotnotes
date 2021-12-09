import React from "react";
import { expect, assert } from "chai";
import { configure } from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MessageInput from "../components/Mobile/MessageInput/index.js";

Enzyme.configure({ adapter: new Adapter() });

describe("MessageInput", () => {
  it("should render MessageInput", () => {
    const wrapper = shallow(<MessageInput />);

    expect(wrapper.containsAllMatchingElements([<MessageInput />])).to.equal(
      true
    );
  });

  it("should exists", () => {
    assert.isDefined(MessageInput);
  });
});
