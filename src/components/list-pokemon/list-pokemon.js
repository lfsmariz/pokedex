import React from "react";
import pokelist from "../../lib/pokelist";
import "./list-pokemon.css";

class Pokelistelement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    pokelist(150).then((result) => this.setState({ data: result }));
  }

  render() {
    return (
      this.state.data &&
      this.state.data.map((poke) => {
        return (
          <div key={poke.id} className="card">
            <p className="name">{poke.name.toUpperCase()}</p>
            <p>Weight: {poke.weight}lbs</p>
            <div className="type">
              {poke.typepokemon.map((typ, i) => (
                <p key={i}>{typ.type.name}</p>
              ))}
            </div>
            <div className="imgs">
              <img src={poke.front_default} alt={poke.name} />
              <img src={poke.front_shiny} alt={poke.name} />
            </div>
          </div>
        );
      })
    );
  }
}

export default Pokelistelement;
