import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// scenes
import Home from "./home";
import SlideTwo from "./slide-two";
//import SlideSeven from "./slide-seven";

export default class EEG101 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Provider component wraps everything in Redux and gives access to the store
    // RouterWithRedux manages allows store to be accessed
    // Each Scene component of Router corresponds to a different scene of the tutorial.
    // All scenes are wrapped in a root NavigationBar component that provides a custom navbar at the top of the screen
    // previous slide info is currently harcoded in as the 'previous' prop
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/slideTwo" component={SlideTwo} />
          </Switch>
        </div>
      </Router>
    );
  }
}
