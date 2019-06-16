import React, {Component} from 'react';
import Footer from '../../common/Footer'
import Header from '../../common/Header'
import _ from 'lodash';

import './addressBook.scss'


class AddressBook extends Component {

  componentDidMount() {

  }

  render () {
    const msg = _.join(["Address-", "Book"], "");

    return (
      <div className="main-container flex-column">
        <Header />
        <div className="flex1">
          <div className="tc">
            <div>{msg}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AddressBook;