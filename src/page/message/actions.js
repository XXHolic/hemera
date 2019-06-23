import fetch from "cross-fetch";

let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text
  };
};

export const toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};

export function fetchTodoList(url) {
  return function(dispatch) {
    return fetch(url)
      .then(
        response => {
          return response.json();
        },
        error => console.log("An error occurred.", error)
      )
      .then(data => {
        console.info("data", data);
        dispatch({ type: "TODO_LIST", data:data.data });
      });
  };
}
