import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <ul className="header-list">
      <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
      <li><NavLink to="/location" activeClassName="active">Location</NavLink></li>
      <li><NavLink to="/accommodation" activeClassName="active">Accommodation</NavLink></li>
      <li><NavLink to="/registry" activeClassName="active">Registry</NavLink></li>
      <li><NavLink to="/rsvp" activeClassName="active">RSVP</NavLink></li>
      <li><NavLink to="/itinerary" activeClassName="active">Itinerary</NavLink></li>
      <li><NavLink to="/vows" activeClassName="active">Vows</NavLink></li>
    </ul>
  );
};

export default Header;
