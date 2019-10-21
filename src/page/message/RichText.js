import React, { Component } from "react";
import PropTypes from 'prop-types';
// import 'bootstrap/js/dist/modal.js';
// import 'bootstrap/js/dist/dropdown.js';
// import 'bootstrap/js/dist/tooltip.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

var $ = require('jquery');
require('bootstrap/js/modal.js');
require('bootstrap/js/dropdown.js');
require('bootstrap/js/tooltip.js');
require('bootstrap/dist/css/bootstrap.css');
// require('font-awesome/css/font-awesome.css');
// require('summernote/dist/summernote-lite.css');
// import 'summernote/dist/summernote-lite.js';
require('summernote/dist/summernote.css');
import 'summernote/dist/summernote.js';
import 'summernote/lang/summernote-zh-TW';

class RichText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text:''
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInit = this.handleInit.bind(this);
  }

  componentDidMount() {

    // fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New']
    $('#summernote').summernote({
      height: 300,
      lang: 'zh-TW',
      fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New'],
      // fontNames: ['宋体','仿宋','楷体','黑体','幼圆','华文行楷','华文隶书','华文细黑','新宋体','Microsoft Yahei','Arial', 'Arial Black', 'Comic Sans MS', 'Courier New','Impact','Tahoma','Times New Roman', 'Verdana'],
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['fontname', ['fontname']],
        ['fontsize', ['fontsize']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['fullscreen']]
      ],
      callbacks:{
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onImageUpload: this.handleUpload,
        onInit: this.handleInit
      }
    });

  }

  componentWillUnmount() {
    $('#summernote').summernote('destroy');
  }

  handleChange (value) {
    console.log('Editable area change',value);

  }

  handleFocus () {
    console.log('Editable area focus');
  }

  handleBlur () {
    let value = $('#summernote').summernote('code')
    console.log('Editable area blur',value);
  }

  handleUpload (files) {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('file', files[0]);
    xhr.onload = function onload() {
      // allow success when 2xx status
      // see https://github.com/react-component/upload/issues/34
      if (xhr.status < 200 || xhr.status >= 300) {
        return '';
      }

      const text = xhr.responseText || xhr.response;
      if (!text) {
        console.info('text',text);
        return text;
      }

      try {
        var result = JSON.parse(text);
        $('#summernote').summernote('insertImage',result.url );
      } catch (e) {
        return text;
      }
    };


    xhr.open('post', 'https://www.mocky.io/v2/5cc8019d300000980a055e76', true);
    xhr.send(formData);

    // upload image to server and create imgNode...
    console.log('files',files);
    // $summernote.summernote('insertNode', imgNode);

  }

  handleInit() {
    var markupStr = '<p>hello world</p>';
    $('#summernote').summernote('code', markupStr);
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
