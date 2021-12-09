import React from "react";
import { expect, assert } from "chai";
import { shallow, mount } from "enzyme";
import Button from "./src/components/Mobile/Button/index";

describe("Button", () => {
  it("should render Button", () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.containsAllMatchingElements([<Button />])).to.equal(true);
  });

  it("should exists", () => {
    assert.isDefined(Button);
  });
});
