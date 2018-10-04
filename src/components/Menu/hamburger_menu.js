import React, { Component } from 'react';

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
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    if (this.state.expanded === false) {
      console.log('not expanded');
      return (
        <div className="menu-button" onClick={this.handleClick}>
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
      );
    }
    console.log('EXPANDED');
    return (
      <div className="menu-button" onClick={this.handleClick}>
        <div className="change bar1" />
        <div className="change bar2" />
        <div className="change bar3" />
      </div>
    );
  }
}

export default Menu;
