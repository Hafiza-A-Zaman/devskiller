import React from 'react';
import PropTypes from 'prop-types';

const Img = ({ values: { src, alt } }) => (
  <img src={src} alt={alt} />
);

Img.propTypes = {
  values: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }).isRequired,
};

export default Img;
