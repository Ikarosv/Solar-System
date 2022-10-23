import React from 'react';
import '../assets/styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <span className="elipse" />
        <h1 className="h1Header">
          Si
          <span className="span">st</span>
          ema So
          <span className="span">la</span>
          r
        </h1>
      </header>
    );
  }
}

export default Header;
