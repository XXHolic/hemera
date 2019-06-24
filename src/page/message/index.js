import React, {Component} from 'react';
import Footer from '../../common/Footer'
import Header from '../../common/Header'
import _ from 'lodash';
import { addMessage, fetchTodoList } from "../../actions";

import './message.scss';
import logo from '../../images/logo.svg'

class Message extends Component {

  componentDidMount() {
    const {dispatch,message} = this.props;
    dispatch(addMessage("dsafdsa"));

    dispatch(
      fetchTodoList("https://xxholic.github.io/lab/data/hemeraData.json")
    ).then(()=>{
      console.info("state", message);
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