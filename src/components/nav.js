import React from "react";
import { NavLink } from"react-router-dom";

export default class Nav extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="nav-wrapper">
        <div className="page-header">
          <img src="./assets/logo-redback-white-compact.png"></img>
        </div>

        <div className="nav-links-wrapper">
          <div className="nav-link">
            <NavLink exact to="/" activeClassName="navlink-active">HOME</NavLink>
          </div>
          <div className="nav-link">
            <NavLink exact to="/breakfast" activeClassName="navlink-active">BREAKFAST</NavLink>
          </div>
          <div className="nav-link">
            <NavLink exact to="/lunch" activeClassName="navlink-active">LUNCH</NavLink>
          </div>
          <div className="nav-link">
            <NavLink exact to="/dinner" activeClassName="navlink-active">DINNER</NavLink>
          </div>
        </div>
      </div>
    )
  }
}