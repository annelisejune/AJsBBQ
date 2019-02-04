import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./nav.js";
import Home from "./templates/home.js";
import Breakfast from "./templates/breakfast.js";
import Lunch from "./templates/lunch";
import Dinner from "./templates/dinner.js";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
          <BrowserRouter>
            <div className="app-page-organization">
              <div className="app-left-side">
                <Nav />
              </div>
              
              <div className="app-right-side">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/breakfast" component={Breakfast} />
                  <Route exact path="/lunch" component={Lunch} />
                  <Route exact path="/dinner" component={Dinner} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}
