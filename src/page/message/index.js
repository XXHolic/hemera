import React, { Component } from "react";

import Header from "../../common/Header";
import Search from "../../common/Search";
import {List,Item} from "../../common/List";
import { fetchMessageList } from "../../actions";
import "./reducers";

import "./message.scss";

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
        <div className="flex1">
          <Search />
          <div>
            <List></List>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
