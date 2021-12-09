import React from "react";
import { configure, shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../App.js";

configure({ adapter: new Adapter() });

describe("Testin <App/> Component", () => {
  it("App renders correctly", () => {
    const wrapper = shallow(<App />);
      
    expect(wrapper.contains(<Switch />)).to.equal(true);
  });
  chai.use(chaiEnzyme());
});
