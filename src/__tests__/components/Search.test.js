//React
import React from 'react';
//Component
import Search from '../../components/Search';
//Testing
import { shallow, } from 'enzyme';

describe('Search', () => {
    let wrapper, props;

    beforeEach(() => {
        props = {
            searchRows: jest.fn(),
            clearSearch: jest.fn(),
            searchString: '',
        };

        wrapper = shallow(<Search { ...props } />);
    });

    it('should have 1 input field', () => {
        const inputs = wrapper.find('input');

        expect(inputs.length).toBe(1);
    });

    it('should have a search icon', () => {
        props = { ...props, showSearchIcon: true };
        wrapper = shallow(<Search { ...props }/>);

        const searchIcon = wrapper.find('.search-icon');

        expect(searchIcon.length).toBe(1);
    });

    it('should not have a search icon', () => {
        props = { ...props, showSearchIcon: false };
        wrapper = shallow(<Search { ...props }/>);

        const searchIcon = wrapper.find('.search-icon');

        expect(searchIcon.length).toBe(0);
    });

    it('should have a clear button', () => {
        props = { ...props, showClearIcon: true };
        wrapper = shallow(<Search { ...props }/>);

        const clearIcon = wrapper.find('button');

        expect(clearIcon.length).toBe(1);
    });

    it('should not have a clear button', () => {
        props = { ...props, showClearIcon: false };
        wrapper = shallow(<Search { ...props }/>);

        const clearIcon = wrapper.find('button');

        expect(clearIcon.length).toBe(0);
  });

    it('should call the clear search field action', () => {
        props = { ...props, showClearIcon: true };
        wrapper = shallow(<Search { ...props }/>);
        
        wrapper.find('button').first().simulate('click');

        expect(props.clearSearch).toHaveBeenCalled();
    });

    it('should call the search row action', () => {
        wrapper.find('input').first().simulate('change', { target: { value: 2 } });

        expect(props.searchRows).toHaveBeenCalledWith({ target: { value: 2 } });
    });
});
