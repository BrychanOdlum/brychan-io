import React from 'react';

import classes from './About.scss';
import Terminal from './Terminal/Terminal';
import Title from '../../../../components/Title/Title';

export default function About() {
  return (
    <section className={classes.about} id={'about'}>
      <Title title={'😊 A little bit about me.'} alignLeft />

      <div className={classes.windowContainer}>
        <Terminal />
      </div>
    </section>
  );
}
