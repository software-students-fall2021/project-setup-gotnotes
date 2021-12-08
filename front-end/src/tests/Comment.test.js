import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import Comment from './src/components/Mobile/Comment/index';


describe('Comment', () => {

    it('should render Comment', () => {

        const wrapper = shallow(<Comment />);

        expect(wrapper.containsAllMatchingElements([

            <Comment />,

        ])).to.equal(true);
    });

    it('should exists', () => {

        assert.isDefined(Comment)
    })
});
