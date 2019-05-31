import React from "react";
import ReactDOM from "react-dom";
import addCommonAttribute from "./decorator.js";
@addCommonAttribute
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "world"
    };

    this.onChangeText = this.onChangeText.bind(this);
  }

  componentDidMount() {
    console.log("isDecorator:", HelloWorld.isDecorator);
  }

  onChangeText() {
    this.setState({
      text: "React"
    });
  }

  onClickMe = () => {
    this.setState({
      text: "you clicked"
    });
  };

  render() {
    const { text } = this.state;
    let templateSy = `${text}模板变量语法`;

    return (
      <div>
        Hello,{text}
        <p>{templateSy}</p>
        <div>
          <button onClick={this.onChangeText}>change text</button>
          <button onClick={this.onClickMe}>Click Me</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(HelloWorld),
  document.querySelector("body")
);
