import {mapReducers} from 'redux-async-actions-reducers';
import { actionsType } from "../../actionsType";

const reducers = {};
const initState = {
  messageList:[]
};

reducers.message = (state = initState, action) => {
  switch (action.type) {
    case actionsType.GET_MESSAGE_LIST:
      return {
        ...state,
        messageList: action.data
      };
    default:
      return state;
  }
};

mapReducers(reducers);
