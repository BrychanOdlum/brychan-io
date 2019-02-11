import React from 'react';

import classes from './Contact.scss';
import Title from '../../../../components/Title/Title';

export default function Contact() {
  const p1 = `
  I am not currently interested in any freelance work offers. However, feel free to drop me
  a line if you'd like to discuss anything from even your favourite coffee bean to your
  fancy new startup.
  `; // TODO: Move this into a config file... Markdown?
  const p2 = `
  I will soon be seeking employment opportunities for when I graduate in June 2020.
  `; // TODO: Move this into a config file... Markdown?

  return (
    <section className={classes.contact} id={'contact'}>
      <Title title={'📨 Get in touch with me.'} alignRight />

      <div className={classes.contactDetails}>
        <p>
          {p1}
          <br />
          <br />
          {p2}
        </p>

        <a href={'mailto:hello@brychan.io'}>
          <button>Say hello!</button>
        </a>
      </div>
    </section>
  );
}
