import React, { Component } from "react";
import Header from "../../common/Header";


import "./mine.less";

import logo from "../../images/logo.svg";

class Mine extends Component {
  componentDidMount() {

  }

  render() {

    return (
      <div className="flex-column">
        <Header content="我的" />
        <div className="flex1">
          <img src={logo}></img>
          <p>生如夏花之绚烂 ，死若秋叶之静美</p>
          <p>世界上最远的距离 不是生与死的距离</p>
          而是我站在你的面前 你却不知道我爱你
        </div>
      </div>
    );
  }
}

export default Mine;
