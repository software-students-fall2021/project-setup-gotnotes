import React from "react";
import { expect, assert } from "chai";
import { shallow, mount } from "enzyme";
import ResetPass from "../Pages/Login/ResetPass/index.js";

import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { jsdom } from "jsdom-global";

describe("ResetPass", () => {
  it("should render ResetPass", () => {
    const wrapper = shallow(<ResetPass />);

    expect(wrapper.containsAllMatchingElements([<ResetPass />])).to.equal(true);
  });

  it("should exists", () => {
    assert.isDefined(ResetPass);
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

describe("ResetPass div", () => {
  it("Renders ResetPass", () => {
    act(() => {
      ReactDOM.render(<ResetPass />, rootContainer);
    });
    const h2 = rootContainer.querySelector("h2");
    expect(h2.textContent).to.equal("Reset Password");
  });
});
