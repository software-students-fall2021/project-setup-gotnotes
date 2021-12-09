import React from "react";
import { expect, assert } from "chai";
import { shallow, mount } from "enzyme";
import UserAvatar from "./src/components/Mobile/UserAvatar/index";

describe("UserAvatar", () => {
  it("should render UserAvatar", () => {
    const wrapper = shallow(<UserAvatar />);

    expect(wrapper.containsAllMatchingElements([<UserAvatar />])).to.equal(
      true
    );
  });

  it("should exists", () => {
    assert.isDefined(UserAvatar);
  });
});
