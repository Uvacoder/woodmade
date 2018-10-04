import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './hamburger_menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      change: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    console.log(this);
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    if (this.state.expanded === false) {
      console.log('not expanded');
      return (
        <TransitionGroup
          component="div"
          className="menu-button"
          onClick={this.handleClick}
        >
          <CSSTransition classNames="bar1" timeout={{ enter: 250, exit: 250 }}>
            <div className="bar1" />
          </CSSTransition>
          <CSSTransition classNames="bar2" timeout={{ enter: 250, exit: 250 }}>
            <div className="bar2" />
          </CSSTransition>
          <CSSTransition classNames="bar3" timeout={{ enter: 250, exit: 250 }}>
            <div className="bar3" />
          </CSSTransition>
        </TransitionGroup>
      );
    }
    console.log('EXPANDED');
    return (
      <TransitionGroup
        component="div"
        className="menu-button"
        onClick={this.handleClick}
      >
        <CSSTransition classNames="bar1" timeout={{ enter: 250, exit: 250 }}>
          <div className="change bar1" />
        </CSSTransition>
        <CSSTransition classNames="bar2" timeout={{ enter: 250, exit: 250 }}>
          <div className="change bar2" />
        </CSSTransition>
        <CSSTransition classNames="bar3" timeout={{ enter: 250, exit: 250 }}>
          <div className="change bar3" />
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Menu;
