import { combineReducers } from "redux";
import { actionsType } from "./actionsType";

// 全局的 state
const app1 = (state = initState, action) => {
  switch (action.type) {
    case actionsType.TEST:
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};


const message = (state, action) => {
  const initState = {
    todos: []
  };

  const actualState = state ? state : initState;

  switch (action.type) {
    case actionsType.ADD_MESSAGE:{
      let todos = actualState.todos;
      todos.push({ text: action.text, completed: false });

      return {
        ...actualState,
        todos
      };
    }
    case actionsType.TODO_LIST:{
      let todos = action.data;

      return {
        ...actualState,
        todos
      };
    }

    default:
      return actualState;
  }
};

const addressBook = (state = {}, action) => {
  console.info("ddd", action.type);
  switch (action.type) {
    case actionsType.ADD_MESSAGE:
      return state;
    default:
      return state;
  }
};

const find = (state = {}, action) => {
  switch (action.type) {
    case actionsType.ADD_MESSAGE:
      return state;
    default:
      return state;
  }
};

const app = combineReducers({
  message,
  addressBook,
  find
});
export default app;