import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={style.container}
      >
        <div style={style.titleContainer}>
          <h1
            style={style.titleText}
          >
            WELCOME TO EEG 101
          </h1>
          <p
            style={{
              fontSize: 15,
              color: "#ffffff",
              fontFamily: "Roboto",
              fontWeight: 200
            }}
          >
            At the end of this tutorial, you will have learned the basics of EEG
            and brain-computer interfaces
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <Link style={{ backgroundColor: "#ffffff", fontFamily: "Roboto", fontWeight: 200 }} to={`/slideTwo`}>
            GET STARTED
          </Link>
        </div>
      </div>
    );
  }
}

let style = {
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#6CCBEF',
    justifyContent: "center",
    alignItems: "stretch",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    
  },
  titleText: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontWeight: 900,
    fontSize: 48
  }
}
