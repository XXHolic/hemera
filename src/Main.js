import React, { Component } from "react";
import PropTypes from "prop-types";

import Footer from "./common/Footer";

class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentDidCatch(e) {
    console.info('e',e);
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

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.element
  ])
};

export default Main;
