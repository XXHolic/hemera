import React, {Component} from 'react';
import './home.scss';
import logo from '../../images/logo.svg'

class Home extends Component {

  render () {
    return (
      <div className="home-text">
        Home
        <img src={logo} />
      </div>
    );
  }
}

export default Home;