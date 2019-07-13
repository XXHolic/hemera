import React from "react";
import "./style.less";
import user1 from './user1.jpeg';
import user2 from './user2.jpeg';
import user3 from './user3.jpeg';
import user4 from './user4.jpeg';


const Item = props => {
  const { name, content, url } = props.data;
  const objMap = {
    '1':user1,
    '2':user2,
    '3':user3,
    '4':user4,
  }

  return (
    <li className="list-item df">
      <div className="list-item-picture">
        <div className="list-item-picture-wrap df">
          {url ? (
            <img src={objMap[url]} />
          ) : (
            <span className="iconfont font1 color4">&#xe60e;</span>
          )}
        </div>
      </div>
      <div className="list-item-text flex1">
        <p className="list-item-name font2 ell">{name}</p>
        {content ? (
          <p className="list-item-content font3 ell">{content}</p>
        ) : (
          ""
        )}
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
