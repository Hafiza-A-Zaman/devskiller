import React from 'react';
import PropTypes from 'prop-types';

const H1 = ({ values }) => <h1>{values.text}</h1>;

H1.propTypes = {
  values: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
};

export default H1;
