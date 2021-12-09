import React from "react";
import { expect, assert } from "chai";
import { shallow, mount } from "enzyme";
import FileData from "./src/components/Mobile/FileData/index";

describe("FileData ", () => {
  it("should render FileData", () => {
    const wrapper = shallow(<FileData />);

    expect(wrapper.containsAllMatchingElements([<FileData />])).to.equal(true);
  });

  it("should exists", () => {
    assert.isDefined(FileData);
  });
});
