import React from "react";
import { expect, assert } from "chai";
import { shallow, mount } from "enzyme";
import ListItems from "./src/components/Mobile/ListItems/index";

describe("ListItems", () => {
  it("should render CommentViewer", () => {
    const wrapper = shallow(<ListItems />);

    expect(wrapper.containsAllMatchingElements([<ListItems />])).to.equal(true);
  });

  it("should exists", () => {
    assert.isDefined(ListItems);
  });
});
