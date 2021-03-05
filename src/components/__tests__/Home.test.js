import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';

describe('Home', () => {
  let wrapper;

  it('Contains Welcome to our page! text', () => {
    wrapper = shallow(<Home />);

    expect(wrapper.find('h1').text()).toContain('Welcome to our page!');
  });
});
