import React from 'react';

import classes from './Terminal.scss';
import Window from '../../../../../components/Window/Window';

export default function Terminal() {
  const p1 = `
  I am currently working as a UI Engineer at Apple in England.
  `; // TODO: Move this into a config file... Markdown?
  const p2 = `
  I focus on creating high performance, well engineered, and elegant applications as a full stack
  engineer. I have experience developing scalable backend services for enterprise applications,
  while in parallel finding great fulfillment designing and implementing beautiful user interfaces.
  `; // TODO: Move this into a config file... Markdown?
  const p3 = `
  Academically, I have obtained a First-Class Honours degree in Computer Science from the University
  of Kent in England, where I graduated with the second highest grade average in the class of 2020.
  `; // TODO: Move this into a config file... Markdown?
  return (
    <Window title={'brychan@10.0.1.23: zsh'}>
      <div className={classes.terminalArea}>
        <div className={classes.command}>$ cd /home/brychan/</div>
        <div className={classes.command}>$ cat README.txt</div>
        <div className={classes.response}>
          {p1}
          <br />
          <br />
          {p2}
          <br />
          <br />
          {p3}
        </div>
        <div>
          <br />
        </div>
        <div className={classes.command}>$ ls skills/</div>
        <div className={classes.response}>
          <span>React</span>
          <span>Redux</span>
          <span>Vue</span>
          <span>Node</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>Swift</span>
          <span>Java</span>
          <span>C#</span>
          <span>Mongo</span>
          <span>SQL</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>SASS</span>
        </div>
        <div>
          <br />
        </div>
        <div className={classes.command}>$ exit</div>
      </div>
    </Window>
  );
}
