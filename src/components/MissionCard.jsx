import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../assets/styles/MissionCard.css';
import pin from '../images/Vector-1.svg';
import flag from '../images/Vector-2.svg';
import calendar from '../images/Vector.svg';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="card" data-testid="mission-card">
        <p className="name" data-testid="mission-name">{ name }</p>
        <div className="informations">
          <div className="yearCountry">
            <img src={ calendar } alt="" />
            <p className="year" data-testid="mission-year">{ year }</p>
            <img src={ pin } alt="" />
            <p className="country" data-testid="mission-country">{ country }</p>
          </div>
          <img src={ flag } alt="" />
          <p className="destination" data-testid="mission-destination">{ destination }</p>
        </div>
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
