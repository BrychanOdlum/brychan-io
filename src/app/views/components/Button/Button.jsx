import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.scss';

function Button({ children, ...props }) {
  return (
    <a className={classes.button} {...props}>
      {children}
    </a>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Button;
