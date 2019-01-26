import React from 'react';

import Settings from '../../../../../settings';

import classes from './Splash.scss';

export default function Splash() {
  return (
    <section className={classes.splash}>
      <div className={classes.identityContainer}>
        <h3>Hi, my name is</h3>
        <h1>Brychan Bennett-Odlum;</h1>
        <h2>I create thoughtful websites and delightful apps.</h2>

        <p dangerouslySetInnerHTML={{ __html: Settings.biography }} />

        <br />
        <br />

        <button onClick="">Get in touch</button>
      </div>
    </section>
  );
}
