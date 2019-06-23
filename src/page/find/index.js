import React, { Component } from "react";
// import { render } from "react-dom";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
// import {Provider} from 'react-redux/src/index';
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";
import TodoTool from "./components/index";

import "./find.scss";
// import { format } from 'url';

const store = createStore(todoApp);

class Find extends Component {
  componentDidMount() {
  }

  render() {
    const msg = "Message-List";

    return (
      <div className="main-container flex-column">
        <Header content="发现" />
        <div className="flex1" id="find">
          <Provider store={store}>
            <TodoTool />
          </Provider>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Find;
