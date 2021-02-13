// import { createStore, combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsReducer";
import initialState from "./contacts/constants/initialState";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

const preloadedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : initialState;

// const store = createStore(
//   rootReducer,
//   persistedState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const reducer = {
  contacts: contactsReducer,
};
const store = configureStore({
  reducer,
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
