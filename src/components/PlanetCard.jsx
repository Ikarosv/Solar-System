import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../assets/styles/PlanetCard.css';

export default class PlanetCard extends Component {
  handleMouseEnter = (event) => {
    this.addClass(document.querySelectorAll('.planet'), 'dark');
    this.removeClass([event.target], 'dark');
    const hovereds = document.querySelectorAll('.hovered');
    if (hovereds) this.removeClass(hovereds, 'hovered');
    this.addClass([event.target], 'hovered');
    this.showName();
  };

  handleMouseLeave = () => {
    this.removeClass(document.querySelectorAll('.planet'), 'dark');
    this.removeClass(document.querySelectorAll('.planet'), 'hovered');
    this.hideName();
  };

  showName = () => {
    const { planetName } = this.props;
    document.getElementById(`planet${planetName}`)
      .style.visibility = 'visible';
  };

  hideName() {
    const { planetName } = this.props;
    document.getElementById(`planet${planetName}`)
      .style.visibility = 'hidden';
  }

  addClass(elements, className) {
    elements.forEach((element) => {
      element.classList.add(className);
    });
  }

  removeClass(elements, className) {
    elements.forEach((element) => {
      element.classList.remove(className);
    });
  }

  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <img
          src={ planetImage.image }
          width={ planetImage.width }
          alt={ `Planeta ${planetName}` }
          onMouseEnter={ this.handleMouseEnter }
          onMouseLeave={ this.handleMouseLeave }
          className="planet"
        />
        <p
          data-testid="planet-name"
          className="planetName"
          id={ `planet${planetName}` }
        >
          { planetName }
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.shape({
    image: PropTypes.string,
    width: PropTypes.string,
  }),
}.isRequired;
