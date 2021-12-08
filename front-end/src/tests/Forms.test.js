import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import Forms from './src/components/Mobile/Forms/index';


describe('Forms', () => {

    it('should render Forms', () => {

        const wrapper = shallow(<Forms />);

        expect(wrapper.containsAllMatchingElements([

            <Forms />,

        ])).to.equal(true);
    });

    it('should exists', () => {

        assert.isDefined(Forms)
    })
});
