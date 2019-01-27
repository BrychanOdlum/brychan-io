import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import classes from './Tabs.scss';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    const { children } = this.props;
    const { selectedIndex } = this.state;

    const tabs = React.Children.toArray(children);

    return (
      <div className={classes.tabsArea}>
        <div className={classes.tabs}>
          {tabs.map((tab, index) => {
            const { name: tabName } = tab.props;
            return (
              <div
                key={tabName}
                className={cx(classes.tab, {
                  [classes.selected]: index === selectedIndex,
                })}
                onClick={() => {
                  this.setState({ selectedIndex: index });
                }}
              >
                {tabName}
              </div>
            );
          })}
        </div>
        <div className={classes.tabArea}>{tabs[selectedIndex]}</div>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Tabs;
