import React, { Component } from 'react';
import './Screen.css';

import sample from './images/sample.svg';
import screen from './images/screen.svg';

class Screen extends Component {

  render() {
    return (
      <div className="container-screen">

        <img className="screen" src={screen} alt="screen" />
        <img className="sample" src={sample} alt="sample" />

      </div>
    );
  };
};

export default Screen;