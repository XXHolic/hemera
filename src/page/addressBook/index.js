import React, {Component} from 'react';
import Footer from '../../common/Footer'
import Header from '../../common/Header'
import _ from 'lodash';

import './addressBook.scss'

import logo from "../../images/logo.svg";


class AddressBook extends Component {

  componentDidMount() {

  }

  render () {
    const msg = _.join(["Address-", "Book"], "");

    return (
      <div className="main-container flex-column">
        <Header content="通讯录" />
        <div className="flex1">
          <div className="tc">
            <img src={logo} />
            {/* <div className="address-book-text">{msg}</div> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AddressBook;