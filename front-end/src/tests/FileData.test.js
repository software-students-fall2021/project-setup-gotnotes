import React from "react";
import { expect, assert } from "chai";
import { configure } from 'enzyme';
import { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import FileData from "../components/Mobile/FileData/index.js";

Enzyme.configure({ adapter: new Adapter() });

describe("FileData ", () => {
  it("should render FileData", () => {
    const wrapper = shallow(<FileData />);

    expect(wrapper.containsAllMatchingElements([<FileData />])).to.equal(true);
  });

  it("should exists", () => {
    assert.isDefined(FileData);
  });
});
