import React from 'react';

import classes from './Terminal.scss';
import Window from '../../../../../components/Window/Window';

export default function Terminal() {
  const p1 = `
  I am working as a Software Engineer for Cisco in San Jose helping to develop a large-scale
  cloud provisioning platform while taking a break from studying at the University of Kent
  in England. There I am studying Computer Science as an undergraduate, expecting to
  graduate in 2020 with an exceptional grade.
  `; // TODO: Move this into a config file... Markdown?
  const p2 = `
  I focus on creating high performance, well engineered, and elegant applications as a
  full stack engineer. I have experience developing scalable backend services for
  large-scale applications, and also greatly enjoy designing beautiful user interfaces.
  `; // TODO: Move this into a config file... Markdown?
  return (
    <Window title={'brychan@10.0.1.52: bash'}>
      <div className={classes.terminalArea}>
        <div className={classes.command}>$ cd /home/brychan/</div>
        <div className={classes.command}>$ cat README.txt</div>
        <div className={classes.response}>
          {p1}
          <br />
          <br />
          {p2}
        </div>
        <div>
          <br />
        </div>
        <div className={classes.command}>$ ls skills/</div>
        <div className={classes.response}>
          <span>React</span>
          <span>Swift</span>
          <span>Java</span>
          <span>JavaScript</span>
          <span>C#</span>
          <span>SQL</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
        <div>
          <br />
        </div>
        <div className={classes.command}>$ exit</div>
      </div>
    </Window>
  );
}
