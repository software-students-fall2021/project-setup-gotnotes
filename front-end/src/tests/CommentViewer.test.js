import React from "react";
import { expect, assert } from "chai";
import { configure } from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CommentViewer from "../components/Mobile/CommentViewer/index.js";

configure({ adapter: new Adapter() });

describe("CommentViewer", () => {
  it("should render CommentViewer", () => {
    const wrapper = shallow(<CommentViewer />);

    expect(wrapper.containsAllMatchingElements([<CommentViewer />])).to.equal(
      true
    );
  });

  it("should exists", () => {
    assert.isDefined(CommentViewer);
  });
});
