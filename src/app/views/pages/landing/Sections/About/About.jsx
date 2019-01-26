import React from 'react';

import Settings from '../../../../../settings';

import classes from './About.scss';
import Terminal from '../../../../components/Terminal/Terminal';

export default function About() {
  return (
    <section className={classes.about}>
      <Terminal />
    </section>
  );
}
