import React, { Component } from "react";
// import React, { Component } from "../../../node_modules/react/index";
import PropTypes from 'prop-types';
// import Header from "../../common/Header";
import Search from "../../common/Search";
// import {List} from "../../common/List";
import { fetchMessageList } from "../../actions";
import "./reducers";
import "./message.scss";
// import data from './data.json';
import RichText from "./RichText";


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
        {/* <Header content="X 信" /> */}
        <div className="page-content flex1">
          <Search />
          {/* <List data={data} /> */}
          <RichText></RichText>
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  dispatch: PropTypes.func
};

export default Message;
