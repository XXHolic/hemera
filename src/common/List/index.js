import React from "react";

import "./style.less";

const Item = props => {
  const { name, content, url } = props.data;
  return (
    <li className="list-item">
      {name}
      {content}
    </li>
  );
};

const List = props => {
  const {
    data = [{ id: 1, url: "", name: "name", content: "content" }]
  } = props;

  return (
    <ul className="list">
      {data.map(item => {
        return <Item data={item} key={item.id} />;
      })}
    </ul>
  );
};

export { List, Item };
