import React from "react";
import { expect, assert } from "chai";
import { shallow, mount } from "enzyme";
import Login from "./src/Pages/Pages/Search/FilePreview/index";

import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { FilePreview } from "../pages/Search/FilePreview";
var jsdom = require("mocha-jsdom");

describe("FilePreview", () => {
  it("should render FilePreview", () => {
    const wrapper = shallow(<FilePreview />);

    expect(wrapper.containsAllMatchingElements([<FilePreview />])).to.equal(
      true
    );
  });

  it("should exists", () => {
    assert.isDefined(FilePreview);
  });
});

global.document = jsdom({
  url: "http://localhost:3000/",
});

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("FilePreview div", () => {
  it("Renders FilePreview", () => {
    act(() => {
      ReactDOM.render(<FilePreview />, rootContainer);
    });
    const h2 = rootContainer.querySelector("h2");
    expect(h2.textContent).to.equal("file preview");
  });
});
