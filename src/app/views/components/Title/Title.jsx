import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import classes from './Title.scss';

function Title(props) {
  return (
    <div
      className={cx(
        classes.title,
        { [classes.alignRight]: props.alignRight },
        { [classes.alignLeft]: props.alignLeft }
      )}
    >
      <h2>{props.title}</h2>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  alignLeft: PropTypes.bool,
  alignRight: PropTypes.bool,
};

Title.defaultProps = {
  alignLeft: false,
  alignRight: false,
};

export default Title;
