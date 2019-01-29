import React from 'react';

import classes from './Projects.scss';
import Title from '../../../../components/Title/Title';
import Project from './Project/Project';

import Settings from '../../../../../settings';

export default function Projects() {
  return (
    <section className={classes.projects} id={'projects'}>
      <Title title={"🛠 A few projects I've worked on."} alignLeft />

      {Settings.projects.map((project, i) => (
        <Project project={project} inverseAlignment={i % 2 === 0} />
      ))}
    </section>
  );
}
