import React, {Component} from 'react';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import Footer from '../../common/Footer'
import Header from '../../common/Header'
import _ from 'lodash';
import { addTodo, fetchTodoList } from "./actions";
import todoApp from "./reducers";

import './message.scss';
import logo from '../../images/logo.svg'

// console.info("thunk", thunk);

const store = createStore(
  todoApp,
  applyMiddleware(
    thunk,
  )
);
class Message extends Component {

  componentDidMount() {
    store.dispatch(addTodo("dsafdsa"));
    store.dispatch(
      fetchTodoList("https://xxholic.github.io/lab/data/hemeraData.json")
    ).then(()=>{
      console.info("state", store.getState());
    });

  }

  render () {
    const msg = _.join(["Message-", "List"],'');

    return (
      <div className="main-container flex-column">
        <Header content="X 信" />
        <div className="flex1">
          <div className="tc">
            <img src={logo} />
            <div className="message-text">{msg}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Message;