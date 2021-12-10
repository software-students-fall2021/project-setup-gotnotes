import React from "react";
import { expect, assert } from "chai";
import { configure } from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import GridItem from "../components/Mobile/GridItem/index.js";

configure({ adapter: new Adapter() });

describe("GridItem", () => {
  it("should render GridItem", () => {
    const wrapper = shallow(<GridItem />);

    expect(wrapper.containsAllMatchingElements([<GridItem />])).to.equal(true);
  });

  it("should exists", () => {
    assert.isDefined(GridItem);
  });
});
