import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import Icons from './src/components/Mobile/Icons/index';


describe('Icons', () => {

    it('should render Icons', () => {

        const wrapper = shallow(<Icons />);

        expect(wrapper.containsAllMatchingElements([

            <Icons />,

        ])).to.equal(true);
    });

    it('should exists', () => {

        assert.isDefined(Icons)
    })
});