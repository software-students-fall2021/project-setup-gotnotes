import React from "react";
import { expect, assert } from "chai";
import { configure } from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from "../components/Mobile/Button/index.js";

configure({ adapter: new Adapter() });

describe("Button", () => {
  it("should render Button", () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.containsAllMatchingElements([<Button />])).to.equal(true);
  });

  it("should exists", () => {
    assert.isDefined(Button);
  });
});
