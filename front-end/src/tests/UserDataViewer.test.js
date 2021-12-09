import React from "react";
import { expect, assert } from "chai";
import { shallow, mount } from "enzyme";
import UserDataViewer from "./src/components/Mobile/UserDataViewer/index";

describe("UserDataViewer", () => {
  it("should render UserDataViewer", () => {
    const wrapper = shallow(<UserDataViewer />);

    expect(wrapper.containsAllMatchingElements([<UserDataViewer />])).to.equal(
      true
    );
  });

  it("should exists", () => {
    assert.isDefined(UserDataViewer);
  });
});
