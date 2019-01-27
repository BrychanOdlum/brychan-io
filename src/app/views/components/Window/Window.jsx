import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import classes from './Window.scss';

function Window(props) {
  return (
    <div className={classes.window}>
      <div className={classes.titleBar}>
        <div className={classes.trafficLights}>
          <div className={cx(classes.trafficLight, classes.close)} />
          <div className={cx(classes.trafficLight, classes.min)} />
          <div className={cx(classes.trafficLight, classes.max)} />
        </div>
        <div className={classes.title}>{props.title}</div>
      </div>
      <div className={classes.contentArea}>{props.children}</div>
    </div>
  );
}

Window.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Window;
