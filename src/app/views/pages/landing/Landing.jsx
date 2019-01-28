import React from 'react';
import classes from './Landing.scss';
import SocialBars from './SocialBars/SocialBars';
import Splash from './Sections/Splash/Splash';
import About from './Sections/About/About';
import Experience from './Sections/Experience/Experience';
import Projects from './Sections/Projects/Projects';
import Contact from './Sections/Contact/Contact';

function Landing() {
  return (
    <>
      <SocialBars />

      <main className={classes.mainContent}>
        <Splash />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Landing;
