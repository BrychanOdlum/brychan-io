import React from 'react';

import classes from './Terminal.scss';
import Window from '../../../../../components/Window/Window';

export default function Terminal() {
  const p1 = `
  I am a British Software Engineer currently building delightful experiences at Apple in Cupertino.
  `; // TODO: Move this into a config file... Markdown?
  const p2 = `
  I focus on crafting high-performance, well-engineered, and elegant applications. I have experience
  developing beautiful, efficient, and scalable front-end and back-end services for enterprise applications,
  delivering applications which users love to use.
  `; // TODO: Move this into a config file... Markdown?
  // const p3 = `
  // Academically, I have obtained a First-Class Honours degree in Computer Science from the University
  // of Kent in England, where I graduated with the second highest grade average in the class of 2020.
  // `; // TODO: Move this into a config file... Markdown?
  const p3 = `Oh, right, and the name's Welsh; it's pronounced Brock-an.`;

  return (
    <Window title={'brychan@10.0.1.23: bosh'}>
      <div className={classes.terminalArea}>
        <div className={classes.command}>£ cd /home/brychan/public</div>
        <div className={classes.command}>£ cat README.txt</div>
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
        <div className={classes.command}>£ ls skills/primary</div>
        <div className={classes.response}>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Vue</span>
          <span>Stencil</span>
          <span>Node</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>SASS</span>
          <span>DOM APIs</span>
          <span>Swift</span>
          <span>Java</span>
          <span>SQL</span>
          <span>Mongo</span>
        </div>
        <div>
          <br />
        </div>
        <div className={classes.command}>£ exit</div>
      </div>
    </Window>
  );
}
