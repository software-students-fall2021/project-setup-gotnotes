import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import SearchHigherOrder from './src/components/Mobile/SearchHigherOrder/index';


describe('SearchHigherOrder', () => {

    it('should render SearchHigherOrder', () => {

        const wrapper = shallow(<SearchHigherOrder />);

        expect(wrapper.containsAllMatchingElements([

            <SearchHigherOrder />,

        ])).to.equal(true);
    });

    it('should exists', () => {

        assert.isDefined(SearchHigherOrder)
    })
});
