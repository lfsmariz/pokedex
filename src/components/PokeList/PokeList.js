import React, { Component } from 'react';

import './PokeList.css';

class PokeList extends Component {
  constructor(props) {
    super(props);

    this.handleSelectedPokemon = this.handleSelectedPokemon.bind(this);
  };

  handleSelectedPokemon(id) {
    this.props.currentPokemon(id);
  };

  render() {
    const { pokemonList } = this.props;

    return (
      <div className="container-pokelist">
        <ol>
          {
            pokemonList.map(({ id, name }) => (
              <li key={id} onClick={() => { this.handleSelectedPokemon(id) }}>
                Nº{String(id).padStart(3, '0')} - {name}
              </li>
            ))
          }
        </ol>
      </div>
    );
  };
};

export default PokeList;
