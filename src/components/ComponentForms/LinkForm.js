import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Actions from './Actions';

const LinkForm = ({
  initialValues,
  children,
  handleSubmit,
}) => {
  const [label, setLabel] = useState(initialValues.label);
  const [href, setHref] = useState(initialValues.href);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit({ label, href });
      setLabel('');
      setHref('');
    }}>
    <div className="component-field">
      <label className="component-field__label">
        label
      </label>
      <input
        autoComplete="off"
        className="component-field__input"
        name="label"
        type="text"
        value={label}
        onChange={e => setLabel(e.target.value)}
      />
      <label className="component-field__label">
        href
      </label>
      <input
        autoComplete="off"
        className="component-field__input"
        name="href"
        type="text"
        value={href}
        onChange={e => setHref(e.target.value)}
      />
    </div>
    <Actions>
      {children}
    </Actions>
    </form>
  );
}

LinkForm.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LinkForm;
