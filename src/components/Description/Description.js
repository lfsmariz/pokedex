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
          <div>
            <p className="characteristics-weight">{weight}</p>
            <p className="characteristics-height">{height}</p>
            {typepokemon.map(types=> (
              <p key={types}>{types.type.name}</p>
            ))}
          </div>
          <div>
            {/* <img
              src="https://www.pngfind.com/pngs/m/301-3015958_246kib-900x900-grass-medallion-by-zekrom-9-d7x8iod.png"
              alt="types"
            /> */}
          </div>
        </div>
      </div>
    );
  };
};

export default Description;
