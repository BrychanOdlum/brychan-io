import React from 'react';

import classes from './Contact.scss';
import Title from '../../../../components/Title/Title';

export default function Contact() {
  return (
    <section className={classes.contact}>
      <Title title={'📨 Get in touch with me.'} alignRight />
    </section>
  );
}
