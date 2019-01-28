import React from 'react';
import PropTypes from 'prop-types';

import classes from './Laptop.scss';

function Window(props) {
  return (
    <div className={classes.laptopContainer}>
      <div className={classes.laptop}>
        <div className={classes.screen}>
          <div className={classes.display}>{props.children}</div>
          <div className={classes.productName}>{props.title}</div>
        </div>
        <div className={classes.keyboardArea} />
      </div>
    </div>
  );
}

Window.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Window;
