import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../components/reducers/authReducer";
import { notesReducer } from "../components/reducers/notesReducer";
import { sidebarReducer } from "../components/reducers/sidebarReducer";
import { uiReducer } from "../components/reducers/uiReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer,
  sidebar: sidebarReducer,
});

// Create the store
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
