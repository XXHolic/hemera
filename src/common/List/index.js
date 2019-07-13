import React from "react";

import "./style.less";
import user from './user.jpeg';

const Item = props => {
  const { name, content, url } = props.data;
  return (
    <li className="list-item df">
      <div className="list-item-picture">
        <div className="list-item-picture-wrap df">
          {url ? (
            <img src={user} />
          ) : (
            <span className="iconfont font1">&#xe60e;</span>
          )}
        </div>
      </div>
      <div className="list-item-text flex1">
        <p className="list-item-name font2 ell">{name}</p>
        {content?<p className="list-item-content font3 ell">{content}</p>:''}

      </div>
    </li>
  );
};

const List = props => {
  const {
    data = [{ id: 1, url: "q", name: "name", content: "content" }]
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
