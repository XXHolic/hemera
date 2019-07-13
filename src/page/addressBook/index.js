import React, { Component } from "react";
import Header from "../../common/Header";
import Search from "../../common/Search";

import "./addressBook.scss";


class AddressBook extends Component {
  componentDidMount() {

  }

  render() {

    return (
      <div className="flex-column flex1">
        <Header content="通讯录" />
        <div className="flex1">
          <Search />
        </div>
      </div>
    );
  }
}

export default AddressBook;
