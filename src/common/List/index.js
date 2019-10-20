import React from "react";
import PropTypes from "prop-types";
import "./style.less";
import user1 from "./user1.jpeg";
import user2 from "./user2.jpeg";
import user3 from "./user3.jpeg";
import user4 from "./user4.jpeg";

const objMap = {
  "1": user1,
  "2": user2,
  "3": user3,
  "4": user4
};

const Item = props => {
  const { data, arrow, className='' } = props;
  const { name, content, url, icon } = data;
  const ele = url ? (
    <img src={objMap[url]} />
  ) : (
    <span className="iconfont font1 color4">&#xe60e;</span>
  );

  const borderStyle = icon?'':'list-item-after';

  return (
    <li className={`list-item df ${borderStyle} ${className}`}>
      {icon ? (
        <div className="list-item-icon tc">
          <span className={`iconfont font2 ${icon}`} />
        </div>
      ) : (
        <div className="list-item-picture">
          <div className="list-item-picture-wrap df">{ele}</div>
        </div>
      )}

      <div className="list-item-text flex1">
        <p className="list-item-name font2 ell">{name}</p>
        {content ? (
          <p className="list-item-content font3 ell">{content}</p>
        ) : (
          ""
        )}
      </div>

      {arrow ? (
        <div className="list-item-arrow">
          <span className="iconfont font1 color4">&#xe600;</span>{" "}
        </div>
      ) : null}
    </li>
  );
};

Item.propTypes = {
  data: PropTypes.object,
  arrow: PropTypes.bool,
  className: PropTypes.string
};

const List = props => {
  const {
    data = [{ id: 1, url: "q", name: "name", content: "content" }],
    arrow = false
  } = props;

  return (
    <ul className="list">
      {data.map(item => {
        return <Item data={item} key={item.id} arrow={arrow} />;
      })}
    </ul>
  );
};

List.propTypes = {
  data: PropTypes.array,
  arrow: PropTypes.bool,
};

export { List, Item };
