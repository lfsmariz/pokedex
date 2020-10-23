import React, { Component } from "react";
import "./Description.css";

class Description extends Component {
  render() {
    const {
      id = 0,
      name = "unknown",
      weight = 0,
      height = 0,
      typepokemon = [],
      front_default = "",
      descriptionPoke = "",
    } = this.props.pokemon;
    return (
      <div className="container-description">
        <h2 className="name-id">
          {String(id).padStart(3, 0)} - {name}
        </h2>
        <p className="description">{descriptionPoke}</p>
        <div className="characteristics">
          <div className="charactteristics-list">
            <p className="characteristics-weight">{weight}</p>
            <p className="characteristics-height">{height}</p>
            {typepokemon.map((types) => (
              <p key={types.type.name}>{types.type.name}</p>
            ))}
          </div>
          <div>
            {typepokemon.map((types) => (
              <img key={types.type.name} src={`../../images/${types.type.name}.png`} alt={types.type.name} />))}
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
