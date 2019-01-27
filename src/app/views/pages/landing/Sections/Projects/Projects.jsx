import React from 'react';

import Settings from '../../../../../settings';

import classes from './Projects.scss';
import Terminal from '../../../../components/Terminal/Terminal';
import Title from '../../../../components/Title/Title';

export default function Projects() {
  return (
    <section className={classes.about}>
      <Title title={"🛠 A few projects I've worked on."} alignLeft />
    </section>
  );
}
