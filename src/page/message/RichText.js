import React, { Component } from "react";
import PropTypes from 'prop-types';
// import 'bootstrap/js/dist/modal.js';
// import 'bootstrap/js/dist/dropdown.js';
// import 'bootstrap/js/dist/tooltip.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

var jquery = require('jquery');
require('bootstrap/js/modal.js');
require('bootstrap/js/dropdown.js');
require('bootstrap/js/tooltip.js');
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('summernote/dist/summernote.css');
import 'summernote/dist/summernote';

class RichText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text:''
    };
  }

  componentDidMount() {
    // var obj = document.getElementById('summernote');
    setTimeout(() => {
      jquery('#summernote').summernote();
    }, 3000);

  }

  render() {
    return (
      <div className="summernote-container">
        <div id="summernote"></div>
      </div>
    );
  }
}

RichText.propTypes = {
  dispatch: PropTypes.func
};

export default RichText;
