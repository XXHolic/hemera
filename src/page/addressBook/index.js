import React, { Component } from "react";
import Header from "../../common/Header";
import Search from "../../common/Search";
import { List } from "../../common/List";

import "./addressBook.scss";

import data from "./data.json";


class AddressBook extends Component {
  componentDidMount() {

  }

  render() {

    return (
      <div className="flex-column flex1">
        <Header content="通讯录" />
        <div className="page-content flex1">
          <Search />
          <List data={data} />
        </div>
      </div>
    );
  }
}

export default AddressBook;
