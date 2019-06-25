import React, { Component } from "react";
import Footer from "./common/Footer";

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main-container flex-column">
        <div className="flex1">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Main;
