import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../Home';

describe('Home', () => {
  it('Contains Welcome to our page! text', () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
