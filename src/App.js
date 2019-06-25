import React from "react";
import { Provider, connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import loadable from "@loadable/component";
// import { bindAsyncActions } from "redux-async-actions-reducers";
import configureStore from "./configureStore";
// import actions from './actions';


const store = configureStore();

const Message = loadable(() => import("./page/message"));
const AddressBook = loadable(() => import("./page/addressBook"));
const Find = loadable(() => import("./page/find"));

const ConnectedMessage = connect(
  state => {
    return {
      message: state.message,
      global: state.global
    };
  }
)(Message);
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

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Route
          path="/"
          exact
          render={routeProps => (
            <ConnectedMessage {...store} {...routeProps} />
          )}
        />
        <Route
          path="/page/addressBook"
          exact
          render={routeProps => (
            <ConnectedAddressBook {...store} {...routeProps} />
          )}
        />
        <Route
          path="/page/find"
          exact
          render={routeProps => <ConnectedFind {...store} {...routeProps} />}
        />
        <Redirect to="/" />
      </Router>
    </Provider>
  );
};

export default App;
