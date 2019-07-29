// import { combineReducers } from "redux";
import {combineAsyncReducers} from 'redux-async-actions-reducers';
import { actionsType } from "./actionsType";

const reducers = {
  addressBook: null,
  find: null,
  message: null,
  mine: null
};

const globalInitState={
  test:''
};

reducers.global = (state = globalInitState, action) => {
  switch (action.type) {
    case actionsType.TEST:
      return {
        ...state,
        test: action.text
      };
    default:
      return state;
  }
};

const app = combineAsyncReducers(reducers);
export default app;