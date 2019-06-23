import fetch from 'cross-fetch';

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

    return fetch(url);
    // return fetch(url).then(response => response.json(),error => console.log("An error occurred.", error));

  };
}