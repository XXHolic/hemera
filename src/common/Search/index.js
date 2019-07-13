import React, {useReducer} from 'react';

import "./style.less";
function init(initial) {
  return Object.assign({}, { isFocus: false,value:'' }, initial);
}

function reducer(state,action) {
  switch (action.type) {
    case "focus":
      return { ...state, isFocus: true };
    case "blur":
      return { ...state, isFocus: false,value:'' };
    case "change":
      return { ...state,value:action.value };
    default:
      return state;
  }
}

function Search(props) {

  const [state,dispatch] = useReducer(reducer,{placeholder:props.placeholder || "搜索"},init);

  const { placeholder,isFocus,value } = state;
  const style = isFocus?'':'tc';
  return (
    <div className="search">
      <input
        value={value}
        className={`search-input ${style}`}
        placeholder={placeholder}
        onChange={(e) => dispatch({ type: "change",value: e.target.value })}
        onFocus={() => dispatch({ type: "focus" })}
        onBlur={() => dispatch({ type: "blur" })}
      />
    </div>
  );
}

export default Search;