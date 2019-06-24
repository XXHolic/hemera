import { combineReducers } from "redux";

const message = (state = [], action) => {
  switch (action.type) {
    case "TODO_LIST":
      return action.data;
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos
});

export default message;
