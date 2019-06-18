import React from "react";
import { BrowserRouter as Router,Route,Redirect } from "react-router-dom";
// import asyncComponent from './common/asyncComponent';
import loadable from "@loadable/component";

const App = () => {
  // const Message = asyncComponent(()=>import ("./page/message"));
  // const AddressBook = asyncComponent(() => import("./page/addressBook"));
  const Message = loadable(()=>import ("./page/message"));
  const AddressBook = loadable(() => import("./page/addressBook"));

  return (
    <Router>
      <Route path="/" exact component={Message} />
      <Route path="/page/addressBook" exact component={AddressBook} />
      <Redirect to="/" />
    </Router>
  );
}

export default App;