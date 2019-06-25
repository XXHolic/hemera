import React, { Component } from "react";
import Header from "../../common/Header";


import "./addressBook.scss";

import logo from "../../images/logo.svg";

class AddressBook extends Component {
  componentDidMount() {

  }

  render() {
    const msg = "Address-Book";

    return (
      <div className="flex-column">
        <Header content="通讯录" />
        <div className="flex1">
          <div className="tc">
            <img src={logo} />
            <div className="address-book-text">{msg}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddressBook;
