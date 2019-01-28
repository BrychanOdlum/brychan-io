import React from 'react';

import classes from './Footer.scss';

export default function Project(props) {
  return (
    <div className={classes.footer}>
      <span>
        {'Designed with '}
        <i className={'fas fa-heart'} />
        {' by '}
        <a href={'https://brychan.io/'}>brychan.io</a>
        {'.'}
      </span>
    </div>
  );
}
