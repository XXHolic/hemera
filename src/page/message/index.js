import React, {Component} from 'react';
import Footer from '../../common/Footer'
import Header from '../../common/Header'
import _ from 'lodash';

import './message.scss';
import logo from '../../images/logo.svg'

class Message extends Component {

  componentDidMount() {

  }

  render () {
    const msg = _.join(["Message-", "List"],'');

    return (
      <div className="main-container flex-column">
        <Header content="X 信" />
        <div className="flex1">
          <div className="tc">
            <img src={logo} />
            <div>{msg}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Message;