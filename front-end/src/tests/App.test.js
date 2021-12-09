import React from "react";
import { configure } from 'enzyme';
import { configure, shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from "../App.js";

configure({ adapter: new Adapter() });

//could be run using mocha App.test.js through command line

configure({
  adapter: new Adapter(),
});
describe("Testin <App/> Component", () => {
  it("App renders a message", () => {
    const wrapper = shallow(<App />);
    const message = (
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    );
    expect(wrapper).to.contain(message);
  });
  chai.use(chaiEnzyme());
});
