import { VisibilityFilters } from "./actions";

const { SHOW_ALL } = VisibilityFilters;
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function visibilityFilterFun(state = SHOW_ALL, action) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}

function todosFun(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { text: action.text, completed: false }];
    case "TOGGLE_TODO": {
      const newTodos = state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
      return newTodos;
    }

    default:
      return state;
  }
}

function todoApp(state = initialState, action) {
  const visibilityFilter = visibilityFilterFun(
    state.visibilityFilter,
    action
  );
  const todos = todosFun(state.todos, action);
  // debugger
  return {
    visibilityFilter,
    todos
  };
}

export default todoApp;
