import React from 'react';
import classes from './Landing.scss';
import SocialBars from './SocialBars/SocialBars';
import Splash from './Sections/Splash/Splash';
import About from './Sections/About/About';
import Experience from './Sections/Experience/Experience';
import Projects from './Sections/Projects/Projects';
import Contact from './Sections/Contact/Contact';
import Footer from './Sections/Footer/Footer';

function Landing() {
  return (
    <>
      <main className={classes.mainContent}>
        <Splash />
        <About />
        <Experience />
        <Projects />
        <Contact />

        <SocialBars />
        <Footer />
      </main>
    </>
  );
}

export default Landing;
