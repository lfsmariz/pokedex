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
    this.filterPokemons = this.filterPokemons.bind(this);

    this.state = {
      pokemonList: [],
      currentPokemon: {},
      filteredList: [],
    };
  };

  componentDidMount() {
    createList(150).then(list =>
      this.setState({ pokemonList: list, currentPokemon: list[0], filteredList: list }));
  };

  selectCurrentPokemon(id) {
    const found = this.state.pokemonList.find(pokemon => pokemon.id === id);

    this.setState({ currentPokemon: found });
  };

  filterPokemons(type) {
    if (type === 'all') {
      this.setState({ filteredList: this.state.pokemonList });
    } else {
      const filteredList = this.state.pokemonList
        .filter(pokemon => pokemon.typepokemon
          .some(types => types.type.name === type));

      this.setState({ filteredList });
    }
  };

  render() {
    return (
      <div className="container">
        <Header />

        <div className="main">

          <div className="main-screen">
            <Screen pokemonList={this.state.currentPokemon} />
            <Description pokemon={this.state.currentPokemon} />
          </div>

          <div className="search-list">
            <Search
              filterPokemons={this.filterPokemons}
            />
            <PokeList
              filteredList={this.state.filteredList}
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
