import React from 'react';

import classes from './Experience.scss';
import Title from '../../../../components/Title/Title';
import Tabs from './Tabs/Tabs';
import Tab from './Tabs/Tab';

import Settings from '../../../../../settings';

export default function Experience() {
  return (
    <section className={classes.experience} id={'experience'}>
      <Title title={'💼 Some of my experience.'} alignRight />
      <Tabs>
        {Settings.experience.map(e => (
          <Tab name={e.company} key={e.company}>
            <div className={classes.entry}>
              <div className={classes.title}>
                <h3>{e.position}</h3>
                <h4>{`${e.company}; ${e.location} - ${e.time}`}</h4>
              </div>
              <ul className={classes.achievements}>
                {e.achievements.map(a => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </Tab>
        ))}
      </Tabs>
    </section>
  );
}
