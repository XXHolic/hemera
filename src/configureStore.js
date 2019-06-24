import { createStore, applyMiddleware,compose } from "redux";
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
    compose(applyMiddleware(thunk, loggerMiddleware),window.devToolsExtension ? window.devToolsExtension() : f => f )
  );
}
