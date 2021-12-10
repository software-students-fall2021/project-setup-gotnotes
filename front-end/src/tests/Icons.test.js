import React from "react";
import { expect, assert } from "chai";
import { configure, shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Icons from "../components/Mobile/Icons/CommentIcon/index.js";

configure({ adapter: new Adapter() });

describe("Icons", () => {
  it("should render Icons", () => {
    const wrapper = shallow(<div className="notificationBell" />);

    expect(wrapper.containsAllMatchingElements([<CommentOutlined />])).to.equal(true);
  });

  it("should exists", () => {
    assert.isDefined(Icons);
  });
});
