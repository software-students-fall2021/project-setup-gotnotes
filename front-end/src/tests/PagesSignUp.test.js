import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import SignUp from './src/Pages/Login/SignUp/index';

import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
var jsdom = require("mocha-jsdom");

describe('SignUp', () => {

    it('should render SignUp', () => {

        const wrapper = shallow(<SignUp/>);

        expect(wrapper.containsAllMatchingElements([

            <SignUp />,

        ])).to.equal(true);
    });

    it('should exists', () => {

        assert.isDefined(SignUp)
    })
});

global.document = jsdom({
  url: "http://localhost:3000/"
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

describe("SignUp div", () => {
  it("Renders SignUp", () => {
    act(() => {
      ReactDOM.render(<SignUp />, rootContainer);
    });
    const h2 = rootContainer.querySelector("h2");
    expect(h2.textContent).to.equal("Sign Up");
  });
});
