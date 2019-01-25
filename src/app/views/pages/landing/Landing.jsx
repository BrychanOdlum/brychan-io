import React from 'react';
import classes from './Landing.scss';
import SocialBars from './SocialBars/SocialBars';
import Splash from './Sections/Splash/Splash';

function Landing() {
  return (
    <>
      <SocialBars />

      <main className={classes.mainContent}>
        <Splash />
      </main>
    </>
  );
}

export default Landing;
