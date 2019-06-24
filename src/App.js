import React from "react";
import { Provider, connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import loadable from "@loadable/component";
import configureStore from "./configureStore";


const store = configureStore();

const Message = loadable(() => import("./page/message"));
const AddressBook = loadable(() => import("./page/addressBook"));
const Find = loadable(() => import("./page/find"));

const ConnectedMessage = connect(
  state => { return {
    message: state.message
  }}
)(Message);

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Route
          path="/"
          exact
          render={routeProps => <ConnectedMessage {...store} {...routeProps} />}
        />
        <Route
          path="/page/addressBook"
          exact
          render={routeProps => (
            <AddressBook {...store} {...routeProps} />
          )}
        />
        <Route
          path="/page/find"
          exact
          render={routeProps => (
            <Find {...store} {...routeProps} />
          )}
        />
        <Redirect to="/" />
      </Router>
    </Provider>
  );
};

export default App;
