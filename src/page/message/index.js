import React, { Component } from "react";

import Header from "../../common/Header";
// import _ from "lodash";
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
      <div className="flex-column">
        <Header content="X 信" />
        <div>
          <p>世界上最远的距离 不是树与树的距离</p>
          <p>而是同根生长的树枝 却无法在风中相依</p>
          <p>世界上最远的距离 不是树枝无法相依</p>
          <p>而是相互了望的星星 却没有交汇的轨迹</p>
        </div>
      </div>
    );
  }
}

export default Message;
