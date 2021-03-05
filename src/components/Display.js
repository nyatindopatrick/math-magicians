import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ data = '0' }) {
  return <div className="screen">{data}</div>;
}

Display.propTypes = {
  data: PropTypes.string.isRequired,
};
