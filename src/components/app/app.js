import React from 'react';
import ItemList from '../item-list';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import StarshipDetails from '../starship-details';

import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;