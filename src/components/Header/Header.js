import React, { Component } from 'react';
import './Header.css';

import topBar from './images/topBar.svg';
import biggestBlueLed from './images/biggestBlueLed.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">

        <div className="top-bar">
          <img className="blue-led" src={biggestBlueLed} alt="blue led" />
        </div>

        <img className="cutout-header" src={topBar} alt="header" />

      </div>
    );
  };
};

export default Header;
