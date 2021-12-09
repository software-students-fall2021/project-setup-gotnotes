import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import GridItem from './src/components/Mobile/GridItem/index';


describe('GridItem', () => {

    it('should render GridItem', () => {

        const wrapper = shallow(<GridItem />);

        expect(wrapper.containsAllMatchingElements([

            <GridItem />,

        ])).to.equal(true);
    });

    it('should exists', () => {

        assert.isDefined(GridItem)
    })
});
