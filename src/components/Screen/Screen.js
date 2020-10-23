import React, { Component } from 'react';
import './Screen.css';

import canvas from './images/canvas.svg';

class Screen extends Component {
  render() {
    const { pokemonList: { front_default } } = this.props;

    return (
      <div className="container-screen">

        <img className="screen" src={canvas} alt="screen" />
        <img className="sample" src={front_default} alt="pokémon" />

      </div>
    );
  };
};

export default Screen;
