import { applyMiddleware,compose } from "redux";
import { createStore } from "redux-async-actions-reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import app from "./reducers";

const loggerMiddleware = createLogger();


export default function configureStore(preloadedState) {
  return createStore(
    app,
    preloadedState,
    compose(applyMiddleware(thunk, loggerMiddleware),window.devToolsExtension ? window.devToolsExtension() : f => f )
  );
}
