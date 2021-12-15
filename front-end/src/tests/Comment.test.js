import React from "react";
import { expect, assert } from "chai";
import { configure } from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Comment from "../components/Mobile/Comment/index.js";

configure({ adapter: new Adapter() });

describe("Comment", () => {
  it("should render Comment", () => {
    const wrapper = shallow(<Comment />);

    expect(wrapper.containsAllMatchingElements([<Comment />])).to.equal(true);
  });

  it("should exists", () => {
    assert.isDefined(Comment);
  });
});
