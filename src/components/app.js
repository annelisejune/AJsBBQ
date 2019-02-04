import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./nav";
import Home from "./templates/home";
import Menu from "./templates/menu";
import About from "./templates/about";
import Contact from "./templates/contact";

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
                  <Route exact path="/menu" component={Menu} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}
