import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class SlideTwo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="graphContainer">
          <img src={require('./assets/neuronarrow.png')} style={{width: 700}}/>
        </div>
        <div className="buttonContainer">
          <Link className="linkButton" to={`/`}>
            HOME
          </Link>
        </div>
      </div>
    );
  }
}
