import React from 'react';

import classes from './Contact.scss';
import Title from '../../../../components/Title/Title';

export default function Contact() {
  const p1 = `
  I am not currently interested in any work opportunities, however, if you'd like to reach out to
  discuss anything else then please do feel free to drop me a line.
  `; // TODO: Move this into a config file... Markdown?

  return (
    <section className={classes.contact} id={'contact'}>
      <Title title={'📨 Get in touch with me.'} alignRight />

      <div className={classes.contactDetails}>
        <p>{p1}</p>

        <a href={'mailto:hello@brychan.io'}>
          <button>Say hello!</button>
        </a>
      </div>
    </section>
  );
}
