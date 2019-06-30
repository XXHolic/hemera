import React, { Component } from "react";
import Header from "../../common/Header";

import "./addressBook.scss";


class AddressBook extends Component {
  componentDidMount() {

  }

  render() {

    return (
      <div className="flex-column">
        <Header content="通讯录" />
        <div>
          <p>世界上最远的距离 不是星星之间的轨迹 </p>
          <p>而是纵然轨迹交汇 却在转瞬间无处寻觅</p>
          <p>世界上最远的距离 不是瞬间便无处寻觅</p>
          而是尚未相遇便注定无法相聚
        </div>
      </div>
    );
  }
}

export default AddressBook;
