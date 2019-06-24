import {actionsType} from './actionsType'

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
