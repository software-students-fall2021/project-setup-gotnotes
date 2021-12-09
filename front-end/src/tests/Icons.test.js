import React from "react";
import { expect, assert } from "chai";
import { shallow, mount } from "enzyme";
import Icons from "../components/Mobile/Icons/CommentIcon/index.js";

describe("Icons", () => {
  it("should render Icons", () => {
    const wrapper = shallow(<Icons />);

    expect(wrapper.containsAllMatchingElements([<CommentOutlined />])).to.equal(true);
  });

  it("should exists", () => {
    assert.isDefined(Icons);
  });
});
