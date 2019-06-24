import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import app from "./reducers";

const loggerMiddleware = createLogger();

const initState = {
  addressBook: null,
  find: null,
  message: null
};

export default function configureStore(preloadedState) {
  return createStore(
    app,
    preloadedState || initState,
    applyMiddleware(thunk, loggerMiddleware)
  );
}
