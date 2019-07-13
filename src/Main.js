import React, { Component } from "react";
import Footer from "./common/Footer";

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main-container flex-column">
        <div className="main-container-wrap df">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
