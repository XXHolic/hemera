import React, { Component } from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
// import TodoTool from "./components/index";

import "./find.scss";
// import { format } from 'url';


class Find extends Component {
  componentDidMount() {
  }

  render() {
    const msg = "Find-List";

    return (
      <div className="main-container flex-column">
        <Header content="发现" />
        <div className="flex1">
        <div>{msg}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Find;
