import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import Navigations from './src/components/Mobile/Navigations/index';


describe('Navigations', () => {

    it('should render Navigations', () => {

        const wrapper = shallow(<Navigations />);

        expect(wrapper.containsAllMatchingElements([

            <Navigations />,

        ])).to.equal(true);
    });

    it('should exists', () => {

        assert.isDefined(Navigations)
    })
});
