import React from 'react';
import { shallow } from 'enzyme';

import Quote from '../Quote';

describe('Quote', () => {
  let wrapper;

  it('Includes text "equations"', () => {
    wrapper = shallow(<Quote />);
    expect(wrapper.find('p').text()).toContain('equations');
  });
});
