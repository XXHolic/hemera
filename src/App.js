import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "world"
    };

    this.onChangeText = this.onChangeText.bind(this);
  }

  componentDidMount() {
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

export default App;