import React from "react";
import { expect, assert } from "chai";
import { configure } from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import PageTitle from "../components/Mobile/Navigations/PageTitle/index.js";

configure({ adapter: new Adapter() });

describe("PageTitle", () => {
  it("should render PageTitle", () => {
    const wrapper = shallow(<PageTitle />);

    expect(wrapper.containsAllMatchingElements([<PageTitle />])).to.equal(true);
  });

  it("should exists", () => {
    assert.isDefined(PageTitle);
  });
});
