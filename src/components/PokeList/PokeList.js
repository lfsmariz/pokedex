import React, { Component } from 'react';
import createListPokemon from '../../lib/pokelist';

import './PokeList.css';

class PokeList extends Component {
  constructor() {
    super();

    this.state = {
      pokemonList: []
    };
  };

  componentDidMount() {
    createListPokemon(250).then(data => this.setState({ pokemonList: data }));
  };

  render() {
    return (
      <div className="container-pokelist">
        <ol>
          {
            this.state.pokemonList.map(pokemon => (
              <li key={pokemon.id}>Nº{String(pokemon.id).padStart(3, '0')} - {pokemon.name}</li>
            ))
          }
        </ol>
      </div>
    );
  };
};

export default PokeList;
