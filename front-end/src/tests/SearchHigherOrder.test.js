import React from "react";
import { expect, assert } from "chai";
import { configure } from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SearchHigherOrder from "../components/Mobile/SearchHigherOrder/index.js";

configure({ adapter: new Adapter() });

describe("SearchHigherOrder", () => {
  it("should render SearchHigherOrder", () => {
    const wrapper = shallow(<SearchHigherOrder />);

    expect(
      wrapper.containsAllMatchingElements([<SearchHigherOrder />])
    ).to.equal(true);
  });

  it("should exists", () => {
    assert.isDefined(SearchHigherOrder);
  });
});
