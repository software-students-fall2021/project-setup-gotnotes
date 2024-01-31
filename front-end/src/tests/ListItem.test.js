import React from "react";
import { expect, assert } from "chai";
import { configure } from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ListItems from "../components/Mobile/ListItem/index.js";

configure({ adapter: new Adapter() });

describe("ListItems", () => {
  it("should render CommentViewer", () => {
    const wrapper = shallow(<ListItems />);

    expect(wrapper.containsAllMatchingElements([<ListItems />])).to.equal(true);
  });

  it("should exists", () => {
    assert.isDefined(ListItems);
  });
});
