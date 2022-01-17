/* eslint-disable react/no-danger */
import React, { Component } from 'react';

import classes from './Splash.scss';
import Settings from '../../../../../settings';
import Button from '../../../../components/Button/Button';

export default class Splash extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.identityContainerRef = React.createRef();
  }

  render() {
    return (
      <section className={classes.splash} ref={this.ref}>
        <div className={classes.identityContainer} ref={this.identityContainerRef}>
          <h3>Hi, my name is...</h3>
          <h1>Brychan Bennett-Odlum</h1>
          <h2>I create powerful and delightful web products.</h2>

          <p dangerouslySetInnerHTML={{ __html: Settings.biography }} />

          <br />
          <br />

          <div className={classes.actionButtons}>
            <Button href={'mailto:hello@brychan.io'}>Get in touch</Button>
          </div>
        </div>
      </section>
    );
  }
}
