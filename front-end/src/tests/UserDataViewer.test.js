import React from "react";
import { expect, assert } from "chai";
import { configure } from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import UserDataViewer from "../components/Mobile/UserDataViewer/index.js";

configure({ adapter: new Adapter() });

describe("UserDataViewer", () => {
  it("should render UserDataViewer", () => {
    const wrapper = shallow(<UserDataViewer />);

    expect(wrapper.containsAllMatchingElements([<UserDataViewer />])).to.equal(
      true
    );
  });

  it("should exists", () => {
    assert.isDefined(UserDataViewer);
  });
});
