import React from 'react';
import cx from 'classnames';

import classes from './Header.scss';

export default function Header() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navMenu}>
        <li className={classes.navBrand}>
          <a href="#">Brychan.io
          </a>
        </li>
      </ul>
      <ul className={cx(classes.navMenu, classes.pullRight, classes.arrayStyle)}>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Get in touch</a></li>
      </ul>
    </nav>
  );
}