import React, { Component } from 'react';
import './Screen.css';

class Screen extends Component {
  render() {
    const { pokemonList: { front_default } } = this.props;

    return (
      <div className="gameboy-screen">
        <img className="sample" src={front_default} alt="pokémon" />
      </div>
    );
  };
};

export default Screen;
