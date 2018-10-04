import React, { Component } from 'react';

import HamburgerMenu from 'react-hamburger-menu';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    if (this.state.open === false) {
      return (
        <HamburgerMenu
          isOpen={this.state.open}
          menuClicked={this.handleClick.bind(this)}
          width={36}
          height={30}
          strokeWidth={1}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
        />
      );
    }
    return (
      <nav>
        <HamburgerMenu
          isOpen={this.state.open}
          menuClicked={this.handleClick.bind(this)}
          width={36}
          height={30}
          strokeWidth={1}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
        />
        <div className="menu-container">
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Gallery</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
