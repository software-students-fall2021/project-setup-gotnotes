import React from "react";
import { expect, assert } from "chai";
import { configure } from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Forms from "../components/Mobile/Forms/index.js";

configure({ adapter: new Adapter() });

describe("Forms", () => {
  it("should render Forms", () => {
    const wrapper = shallow(<Forms />);

    expect(wrapper.containsAllMatchingElements([<Forms />])).to.equal(true);
  });

  it("should exists", () => {
    assert.isDefined(Forms);
  });
});
