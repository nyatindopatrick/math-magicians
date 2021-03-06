import React from 'react';
import rendere from 'react-test-renderer';

import Quote from '../Quote';

describe('Quote', () => {
  it('Includes text "equations"', () => {
    const tree = rendere.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
