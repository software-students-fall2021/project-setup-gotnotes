import React from "react";
import { expect, assert } from "chai";
import { configure } from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import BottomNav from "../components/Mobile/Navigations/BottomNav/index.js";

configure({ adapter: new Adapter() });

describe("BottomNac", () => {
  it("should render BottomNav", () => {
    const wrapper = shallow(<BottomNav />);

    expect(wrapper.containsAllMatchingElements([<BottomNav />])).to.equal(true);
  });

  it("should exists", () => {
    assert.isDefined(BottomNav);
  });
});
