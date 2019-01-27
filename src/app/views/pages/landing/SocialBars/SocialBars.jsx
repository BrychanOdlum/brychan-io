import React from 'react';
import cx from 'classnames';

import classes from './SocialBars.scss';

export default function SocialBars() {
  return (
    <>
      <div className={cx(classes.bottomSocial, classes.left, classes.icons)}>
        <a href="#">
          <i className={'fab fa-github'} />
        </a>
        <a href="#">
          <i className={'fab fa-linkedin'} />
        </a>
        <a href="#">
          <i className={'fas fa-envelope'} />
        </a>
      </div>
      <div className={cx(classes.bottomSocial, classes.right, classes.text)}>
        <p>
          <a href="#">hello@brychan.io</a>
        </p>
      </div>
    </>
  );
}
