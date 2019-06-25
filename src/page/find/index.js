import React, { Component } from "react";
import Header from "../../common/Header";
import "./reducers";

import "./find.scss";

class Find extends Component {
  componentDidMount() {}

  render() {
    const msg = "Find-List";

    return (
      <div className="flex-column">
        <Header content="发现" />
        <div className="flex1">
          <div>{msg}</div>
        </div>
      </div>
    );
  }
}

export default Find;
