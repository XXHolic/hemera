import {actionsType} from './actionsType';
import fetch from "cross-fetch";

export const test = text => {
  return {
    type: actionsType.TEST,
    text
  };
}

// message 相关的 actions
// export const getMessageList = () => {
//   return {
//     type: "GET_MESSAGE_LIST",
//   };
// }

export const addMessage = (text) => {
  return {
    type: actionsType.ADD_MESSAGE,
    text
  };
}

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
        dispatch({ type: actionsType.TODO_LIST, data: data.data });
      });
  };
}
