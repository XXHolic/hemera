import React, { Component } from "react";
import PropTypes from 'prop-types';
import Header from "../../common/Header";
import Search from "../../common/Search";
import {List} from "../../common/List";
import { fetchMessageList } from "../../actions";
import "./reducers";
import "./message.scss";
import data from './data.json';


class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text:''
    };
  }

  componentDidMount() {
    // console.info(this.props);
    const { dispatch } = this.props;
    // dispatch(addMessage("dsafdsa"));

    dispatch(
      fetchMessageList("https://xxholic.github.io/lab/data/hemeraData.json")
    ).then(() => {
      // console.info("state", this.props.message);
      // test();
      // throw new Error('fdsfd');
    });
  }

  // testClick = ()=> {
  //   debugger;
  //   this.setState({
  //     text:'changed'
  //   });
  // }

  render() {
    return (
      <div className="flex-column flex1">
        <Header content="X 信" />
        <div className="page-content flex1">
          <Search />
          <List data={data} />
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  dispatch: PropTypes.func
};

export default Message;
