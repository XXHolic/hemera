import { mapReducers } from "redux-async-actions-reducers";
import { actionsType } from "../../actionsType";

const reducers = {};
const initState = {};

reducers.find = (state=initState,action) => {
    switch (action.type) {
      case "ADD_TODO":

      case "TOGGLE_TODO":

      default:
        return state;
    }
}

mapReducers(reducers);