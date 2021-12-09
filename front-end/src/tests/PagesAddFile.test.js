import React from "react";
import { expect, assert } from "chai";
import { shallow, mount } from "enzyme";
import TestFile from "../Pages/AddFile/index.js";

import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { AddFile } from "../pages/AddFile";
var jsdom = require("mocha-jsdom");

describe("TestFile", () => {
  it("should render TestFile", () => {
    const wrapper = shallow(<TestFile />);

    expect(wrapper.containsAllMatchingElements([<TestFile />])).to.equal(true);
  });

  it("should exists", () => {
    assert.isDefined(Login);
  });
});

global.document = jsdom({
  url: "http://localhost:3000/",
});

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("label");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("AddFile div", () => {
  it("Renders AddFile", () => {
    act(() => {
      ReactDOM.render(<AddFile />, rootContainer);
    });
    const label = rootContainer.querySelector("label");
    expect(label.textContent).to.equal("Select University");
  });
});
