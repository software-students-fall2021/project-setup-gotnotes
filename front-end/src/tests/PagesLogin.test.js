import React from "react";
import { expect, assert } from "chai";
import { shallow, mount } from "enzyme";
import Login from "../Pages/Login/Login/index.js";

import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { jsdom } from "jsdom-global";

describe("Login", () => {
  it("should render Login", () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.containsAllMatchingElements([<Login />])).to.equal(true);
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
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("Login div", () => {
  it("Renders Login", () => {
    act(() => {
      ReactDOM.render(<Login />, rootContainer);
    });
    const h2 = rootContainer.querySelector("h2");
    expect(h2.textContent).to.equal("Login");
  });
});
