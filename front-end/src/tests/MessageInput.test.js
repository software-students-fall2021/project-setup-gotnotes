import React from "react";
import { expect, assert } from "chai";
import { shallow, mount } from "enzyme";
import MessageInput from "./src/components/Mobile/MessageInput/index";

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
