import React from "react";
import { expect, assert } from "chai";
import { shallow, mount } from "enzyme";
import CommentViewer from "./src/components/Mobile/CommentViewer/index";

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
