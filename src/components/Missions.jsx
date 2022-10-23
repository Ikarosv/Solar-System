import React, { Component } from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';
import '../assets/styles/Missions.css';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        <ul>
          {missions.map(({ name, year, country, destination }) => (
            <li key={ `mission-${name}` }>
              <MissionCard
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
