import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import PageTitle from './src/components/Mobile/Navigations/PageTitle/index';


describe('PageTitle', () => {

    it('should render PageTitle', () => {

        const wrapper = shallow(<PageTitle />);

        expect(wrapper.containsAllMatchingElements([

            <PageTitle />,

        ])).to.equal(true);
    });

    it('should exists', () => {

        assert.isDefined(PageTitle)
    })
});
