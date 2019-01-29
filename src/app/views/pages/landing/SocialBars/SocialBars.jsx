import React from 'react';
import cx from 'classnames';

import classes from './SocialBars.scss';

export default function SocialBars() {
  return (
    <>
      <div className={cx(classes.bottomSocial, classes.left, classes.icons)}>
        <a href={'https://github.com/BrychanOdlum'} target={'_blank'}>
          <i className={'fab fa-github'} />
        </a>
        <a href={'https://www.linkedin.com/in/brychan-bennett-odlum-6b820755'} target={'_blank'}>
          <i className={'fab fa-linkedin'} />
        </a>
        <a href={'mailto:hello@brychan.io'}>
          <i className={'fas fa-envelope'} />
        </a>
      </div>
      <div className={cx(classes.bottomSocial, classes.right, classes.text)}>
        <p>
          <a href={'mailto:hello@brychan.io'}>hello@brychan.io</a>
        </p>
      </div>
    </>
  );
}
