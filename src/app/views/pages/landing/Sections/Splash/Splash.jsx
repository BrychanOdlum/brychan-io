import React, { Component } from 'react';

import Settings from '../../../../../settings';

import classes from './Splash.scss';

export default class Splash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollProgress: 0,
    };

    this.handleWindowScroll = this.handleWindowScroll.bind(this);

    this.ref = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  handleWindowScroll() {
    const totalScrolled = window.pageYOffset;
    const targetScrolled = 100;

    const percentage = totalScrolled / targetScrolled;

    this.setState({
      scrollProgress: percentage,
    });
  }

  render() {
    const styles = {
      opacity: 1 - (this.state.scrollProgress / 2.5),
      marginTop: 50 - (this.state.scrollProgress * 30),
    };

    return (
      <section className={classes.splash} ref={this.ref}>
        <div className={classes.identityContainer} style={styles}>
          <h3>Hi, my name is</h3>
          <h1>Brychan Bennett-Odlum</h1>
          <h2>I create powerful systems and delightful apps.</h2>

          <p dangerouslySetInnerHTML={{ __html: Settings.biography }}/>

          <br/>
          <br/>

          <button onClick="">Get in touch</button>
        </div>
      </section>
    );
  }
}
