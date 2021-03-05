import React from 'react';
import { shallow } from 'enzyme';

import Calculator from '../Calculator';

describe('Calculator', () => {
  let wrapper;

  it('should include do some math!', () => {
    wrapper = shallow(<Calculator />);
    expect(wrapper.find('h2').text()).toContain('do some math!');
  });
});
