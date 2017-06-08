import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component {
constructor(props) {
  super(props);
  this.state = {
    deadline: 'December 25, 2017',
    newDeadline: ''
  }
}

  render(){
      return(
        <div className="Nav">
          <div className="Nav-title"></div>
          <Nav />
        </div>
      )
  }
}

export default Nav;
