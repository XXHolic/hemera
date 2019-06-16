import React from "react";
import { BrowserRouter as Router,Route,Redirect } from "react-router-dom";
import Message from './page/message';
import AddressBook from "./page/addressBook";

const App = () => {

  return (
    <Router>
      <Route path="/" exact component={Message} />
      <Route path="/page/addressBook" exact component={AddressBook} />
      <Redirect to="/" />
    </Router>
  );
}

export default App;