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
        <div className="name-id">
          <h2>{String(id).padStart(3, 0)} - {name}</h2>
        </div>

        <div className="description"><p>{descriptionPoke}</p></div>

        <div className="characteristics">
          <div className="charactteristics-list">
            <div className="pokeInfo">
              <p className="characteristics-weight">weight. {weight}lbs</p>
              <p className="characteristics-height">height. {height}''</p>
              {typepokemon.map((types) => (
                <p key={types}>{types.type.name}</p>
              ))}
            </div>

            <div className="typeIcon">
              {/* {typepokemon.map((types) => (
                <img
                  src={`../../images/${types.type.name}.png`}
                  alt={types.type.name}
                />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
