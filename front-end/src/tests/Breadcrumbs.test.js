import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import Breadcrumbs from './src/components/Mobile/Navigations/Breadcrumbs/index';


describe('Breadcrumbs', () => {

    it('should render Breadcrumbs', () => {

        const wrapper = shallow(<Breadcrumbs />);

        expect(wrapper.containsAllMatchingElements([

            <Breadcrumbs />,

        ])).to.equal(true);
    });

    it('should exists', () => {

        assert.isDefined(Breadcrumbs)
    })
});
