import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import HamburgerMenu from 'react-hamburger-menu';

import './hamburger_menu.css';

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
        <div className="burger">
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={36}
            height={30}
            strokeWidth={3}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
      );
    }
    return (
      <nav>
        <div className="burger">
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={36}
            height={30}
            strokeWidth={3}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>

        <div className="menu-container">
          <ul className="menu-list" style={{ listStyle: 'none' }}>
            <li className="menu-list-item">
              <Link
                onClick={this.handleClick}
                className="menu-list-item route-link"
                style={{ textDecoration: 'none' }}
                to="/"
              >
                Home
              </Link>
            </li>
            {/* <li className="menu-list-item">
              <Link
                onClick={this.handleClick}
                className="menu-list-item route-link"
                style={{ textDecoration: 'none' }}
                to="/contact"
              >
                Contact
              </Link>
            </li> */}
            <li className="menu-list-item">
              <Link
                onClick={this.handleClick}
                className="menu-list-item route-link"
                style={{ textDecoration: 'none' }}
                to="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li className="menu-list-item">
              <a
                onClick={this.handleClick}
                className="menu-list-item route-link"
                style={{ textDecoration: 'none' }}
                href="https://www.etsy.com/shop/heartmadewoodworking"
                target="_blank"
              >
                Purchase
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
