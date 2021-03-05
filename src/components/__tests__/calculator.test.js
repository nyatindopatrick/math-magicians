import React from 'react';
import renderer from 'react-test-renderer';

import Calculator from '../Calculator';

describe('Calculator', () => {
  it('should include do some math!', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
