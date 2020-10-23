import React, { Component } from 'react';
import fetch from 'node-fetch';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleSelectType = this.handleSelectType.bind(this);
    this.fetchTypes = this.fetchTypes.bind(this);

    this.state = {
      pokeTypes: []
    };
  };

  componentDidMount() {
    this.fetchTypes();
  };

  fetchTypes() {
    fetch('https://pokeapi.co/api/v2/type')
      .then(response => response.json())
      .then(data => this.setState({ pokeTypes: data.results }));
  };

  handleSelectType({ target }) {
    this.props.filterPokemons(target.value);
  };

  render() {

    return (
      <div className="container-search">
        <select name="types" id="types" onChange={this.handleSelectType}>
          <option key='all' value="all">all</option>
          {
            this.state.pokeTypes.map(({ name }) => (
              <option key={name} value={name}>{name}</option>
            ))
          }
        </select>
      </div>
    );
  };
};

export default Search;
