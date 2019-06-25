import React, { Component } from "react";

import Header from "../../common/Header";
import _ from "lodash";
import { fetchMessageList } from "../../actions";
import "./reducers";

import "./message.scss";
import logo from "../../images/logo.svg";

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
    const msg = _.join(["Message-", "List"], "");

    return (
      <div className="flex-column">
        <Header content="X 信" />
        <div className="tc">
          <img src={logo} />
          <div className="message-text">{msg}</div>
        </div>
      </div>
    );
  }
}

export default Message;
