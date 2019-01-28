import React from 'react';

import classes from './Contact.scss';
import Title from '../../../../components/Title/Title';

export default function Contact() {
  return (
    <section className={classes.contact}>
      <Title title={'📨 Get in touch with me.'} alignRight />

      <div className={classes.contactDetails}>
        <p>
          I am not currently interested in any freelance work offers. However, feel free to drop me
          a line if you'd like to discuss anything from even your favourite coffee bean to your
          fancy new startup.
          <br />
          <br />
          I will soon be seeking employment opportunities for when I graduate in June 2020.
        </p>

        <button>Say hello!</button>
      </div>
    </section>
  );
}
