import React from "react";
import { expect, assert } from "chai";
import { configure } from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Breadcrumbs from "../components/Mobile/Navigations/Breadcrumbs/index.js";

configure({ adapter: new Adapter() });

describe("Breadcrumbs", () => {
  it("should render Breadcrumbs", () => {
    const wrapper = shallow(<Breadcrumbs />);

    expect(wrapper.containsAllMatchingElements([<Breadcrumbs />])).to.equal(
      true
    );
  });

  it("should exists", () => {
    assert.isDefined(Breadcrumbs);
  });
});
