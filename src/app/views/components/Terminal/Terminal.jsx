import React from 'react';
import cx from 'classnames';

import classes from './Terminal.scss';

export default function Terminal() {
  return (
    <div className={classes.terminal}>
      <div className={classes.titleBar}>
        <div className={classes.trafficLights}>
          <div className={cx(classes.trafficLight, classes.close)} />
          <div className={cx(classes.trafficLight, classes.min)} />
          <div className={cx(classes.trafficLight, classes.max)} />
        </div>
        <div className={classes.title}>contact@brychan.io: about</div>
      </div>
      <div className={classes.contentArea}>

      </div>
    </div>
  );
}
