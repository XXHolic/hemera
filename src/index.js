import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "world"
    };

    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText() {
    this.setState({
      text:'React'
    });
  }

  render() {
    const { text } = this.state;

    return (
      <div>
        Hello,{text}
        <div>
          <button onClick={this.onChangeText}>change text</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(HelloWorld),
  document.querySelector('body')
);