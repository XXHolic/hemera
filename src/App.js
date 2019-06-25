import React from "react";
import { Provider, connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import loadable from "@loadable/component";
// import { bindAsyncActions } from "redux-async-actions-reducers";
import configureStore from "./configureStore";
import Main from "./Main";
// import actions from './actions';

const store = configureStore();

const Message = loadable(() => import("./page/message"));
const AddressBook = loadable(() => import("./page/addressBook"));
const Find = loadable(() => import("./page/find"));
const Mine = loadable(() => import("./page/mine"));

const ConnectedMessage = connect(state => {
  return {
    message: state.message,
    global: state.global
  };
})(Message);
const ConnectedAddressBook = connect(state => {
  return {
    addressBook: state.addressBook,
    global: state.global
  };
})(AddressBook);
const ConnectedFind = connect(state => {
  return {
    find: state.find,
    global: state.global
  };
})(Find);
const ConnectedMine = connect(state => {
  return {
    mine: state.mine,
    global: state.global
  };
})(Mine);

const App = (
  <Provider store={store}>
    <Router>
      <Main>
        <Route
          path="/page/message"
          exact
          render={routeProps => <ConnectedMessage {...store} {...routeProps} />}
        />
        <Route
          path="/page/addressBook"
          render={routeProps => (
            <ConnectedAddressBook {...store} {...routeProps} />
          )}
        />
        <Route
          path="/page/find"
          render={routeProps => <ConnectedFind {...store} {...routeProps} />}
        />
        <Route
          path="/page/mine"
          render={routeProps => <ConnectedMine {...store} {...routeProps} />}
        />
        <Redirect to="/page/message" />
      </Main>
    </Router>
  </Provider>
);

export default App;
