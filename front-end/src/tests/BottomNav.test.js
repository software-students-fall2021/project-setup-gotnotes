import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import BottomNav from './src/components/Mobile/Navigations/BottomNav/index';


describe('BottomNac', () => {

    it('should render BottomNav', () => {

        const wrapper = shallow(<BottomNav />);

        expect(wrapper.containsAllMatchingElements([

            <BottomNav />,

        ])).to.equal(true);
    });

    it('should exists', () => {

        assert.isDefined(BottomNav)
    })
});
