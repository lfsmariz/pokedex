import React, { Component } from 'react';

import './Container.css';

import Header from '../Header/Header';
import Screen from '../Screen/Screen';
import Description from '../Description/Description';
import Search from '../Search/Search';
import PokeList from '../PokeList/PokeList';
import Footer from '../Footer/Footer';

class Container extends Component {

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
            <PokeList />
          </div>

        </div>

        <Footer />
      </div>
    );
  };
};

export default Container;