import React from 'react';
import PropTypes from 'prop-types';

const A = ({ values: { href, label} }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
);

A.propTypes = {
  values: PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
};

export default A;
