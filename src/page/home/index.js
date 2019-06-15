import React, {Component} from 'react';
import Footer from '../../common/Footer'
import Header from '../../common/Header'
import './home.scss';
import logo from '../../images/logo.svg'

class Home extends Component {

  componentDidMount() {

  }

  render () {
    return (
      <div className="main-container flex-column">
        <Header />
        <div className="flex1">
          <div className="tc">
            <img src={logo} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;