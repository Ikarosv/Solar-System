import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import Title from './Title';
import '../assets/styles/SolarSystem.css';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <ul>
          {
            planets.map(({ name, image, width }) => (
              <li key={ name }>
                <PlanetCard planetName={ name } planetImage={ { image, width } } />
              </li>
            ))
          }
        </ul>
        <span className="line" />
      </div>
    );
  }
}
