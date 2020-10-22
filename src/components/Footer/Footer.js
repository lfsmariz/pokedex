import React, { Component } from 'react';
import './Footer.css';

import botBar from './images/botBar.svg';
import pokedexMiniature from './images/pokedexMiniature.svg';

class Footer extends Component {
  render() {
    return (
      <div className="footer">

        <img className="cutout" src={botBar} alt="footer" />

        <div className="bot-bar">
          <img className="pokedex-miniature" src={pokedexMiniature} alt="blue led" />
        </div>

      </div>
    );
  };
};

export default Footer;
