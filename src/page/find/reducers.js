import { mapReducers } from "redux-async-actions-reducers";
// import { actionsType } from "../../actionsType";

const reducers = {};
const initState = {};

reducers.find = (state=initState,action) => {
    switch (action.type) {
      case "ADD_TODO":
      break;
      case "TOGGLE_TODO":
      break;
      default:
        return state;
    }
}

mapReducers(reducers);