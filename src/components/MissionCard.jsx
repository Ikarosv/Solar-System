import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../assets/styles/MissionCard.css';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="card" data-testid="mission-card">
        <p className="name" data-testid="mission-name">{ name }</p>
        <p className="year" data-testid="mission-year">{ year }</p>
        <p className="country" data-testid="mission-country">{ country }</p>
        <p className="destination" data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;
