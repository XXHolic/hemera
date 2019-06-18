import React, { Component } from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "./actions";
import { createStore } from "redux";
import todoApp from "./reducers";

import "./addressBook.scss";

import logo from "../../images/logo.svg";

class AddressBook extends Component {
  componentDidMount() {
    let store = createStore(todoApp);
    // 打印初始状态
    console.log(store.getState());

    // 每次 state 更新时，打印日志
    // 注意 subscribe() 返回一个函数用来注销监听器
    const unsubscribe = store.subscribe(() => console.log(store.getState()));

    // 发起一系列 action
    store.dispatch(addTodo("Learn about actions"));
    store.dispatch(addTodo("Learn about reducers"));
    store.dispatch(addTodo("Learn about store"));
    store.dispatch(toggleTodo(0));
    store.dispatch(toggleTodo(1));
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

    // 停止监听 state 更新
    unsubscribe();
  }

  render() {
    const msg = "Address-Book";

    return (
      <div className="main-container flex-column">
        <Header content="通讯录" />
        <div className="flex1">
          <div className="tc">
            <img src={logo} />
            <div className="address-book-text">{msg}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AddressBook;
