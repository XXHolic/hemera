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
          <div className="tc">
            <img src={logo} />
          </div>
        </div>
      </div>
    );
  }
}

export default Mine;
