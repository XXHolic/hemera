import React, { Component } from "react";

import Header from "../../common/Header";
import Search from "../../common/Search";
import {List} from "../../common/List";
import { fetchMessageList } from "../../actions";
import "./reducers";
import "./message.scss";
import data from './data.json';

class Message extends Component {
  componentDidMount() {
    // console.info(this.props);
    const { dispatch, message } = this.props;
    // dispatch(addMessage("dsafdsa"));

    dispatch(
      fetchMessageList("https://xxholic.github.io/lab/data/hemeraData.json")
    ).then(() => {
      // console.info("state", this.props.message);
    });
  }

  render() {

    return (
      <div className="flex-column flex1">
        <Header content="X 信" />
        <div className="page-content flex1">
          <Search />
          <List data={data}></List>
        </div>
      </div>
    );
  }
}

export default Message;
