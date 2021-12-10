import React from "react";
import { expect, assert } from "chai";
import { configure } from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import UserAvatar from "../components/Mobile/UserAvatar/index.js";

configure({ adapter: new Adapter() });

describe("UserAvatar", () => {
  it("should render UserAvatar", () => {
    const wrapper = shallow(<UserAvatar />);

    expect(wrapper.containsAllMatchingElements([<UserAvatar />])).to.equal(
      true
    );
  });

  it("should exists", () => {
    assert.isDefined(UserAvatar);
  });
});
