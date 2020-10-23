import React, { Component } from 'react';

import createList from '../../lib/pokelist';

import './Container.css';

import Header from '../Header/Header';
import Screen from '../Screen/Screen';
import Description from '../Description/Description';
import Search from '../Search/Search';
import PokeList from '../PokeList/PokeList';
import Footer from '../Footer/Footer';

class Container extends Component {

  constructor(props) {
    super(props);

    this.selectCurrentPokemon = this.selectCurrentPokemon.bind(this);

    this.state = {
      pokemonList: [],
      currentPokemon: {},
    };
  };

  componentDidMount() {
    createList(150).then(list =>
      this.setState({ pokemonList: list, currentPokemon: list[0] }));
  };

  selectCurrentPokemon(id) {
    const found = this.pokemonList.find(pokemon => pokemon.id === id);

    this.setState({ currentPokemon: found });
  };

  render() {
    return (
      <div className="container">
        <Header />

        <div className="main">

          <div className="main-screen">
            <Screen />
            <Description />
          </div>

          <div className="search-list">
            <Search />
            <PokeList
              pokemonList={this.state.pokemonList}
              currentPokemon={this.selectCurrentPokemon}
            />
          </div>

        </div>

        <Footer />
      </div>
    );
  };
};

export default Container;
