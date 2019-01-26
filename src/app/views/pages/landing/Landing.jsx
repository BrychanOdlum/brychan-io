import React from 'react';
import classes from './Landing.scss';
import SocialBars from './SocialBars/SocialBars';
import Splash from './Sections/Splash/Splash';
import About from './Sections/About/About';

function Landing() {
  return (
    <>
      <SocialBars />

      <main className={classes.mainContent}>
        <Splash />
        <About />
      </main>
    </>
  );
}

export default Landing;
