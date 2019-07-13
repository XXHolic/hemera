import React, { Component } from "react";
import Header from "../../common/Header";
import "./reducers";

import "./find.scss";

class Find extends Component {
  componentDidMount() {}

  render() {
    const msg = "Find-List";

    return (
      <div className="flex-column flex1">
        <Header content="发现" />
        <div className="flex1">
          <p>世界上最远的距离是鱼与飞鸟的距离 </p>
          <p>一个在天 一个却深潜海底</p>
        </div>
      </div>
    );
  }
}

export default Find;
