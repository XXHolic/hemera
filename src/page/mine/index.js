import React, { Component } from "react";
import Header from "../../common/Header";
import { Item } from "../../common/List";

import "./mine.less";

import data from "./data.json";

class Mine extends Component {

  render() {

    return (
      <div className="flex-column flex1">
        <Header content="我的" />
        <div className="page-content flex1">
          {data.map((item, index) => {
            let ele = item.map((itemData, index) => {
              const itemBorderStyle =
                index === item.length - 1 ? "" : "show-item-border";
              return (
                <Item
                  className={itemBorderStyle}
                  data={itemData}
                  arrow={true}
                  key={itemData.id}
                />
              );
            });

            return (
              <ul className="mb10 list-border" key={index}>
                {ele}
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Mine;
