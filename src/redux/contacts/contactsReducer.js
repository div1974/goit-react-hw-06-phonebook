import { combineReducers } from "redux";
// import actionTypes from './contactsActionsTypes';
import contactActions from "./contactsActions";
import { createReducer } from "@reduxjs/toolkit";

const addContact = (state, action) => {
  return [...state, action.payload.contact];
};

const removeContact = (state, action) => {
  return state.filter((task) => task.id !== action.payload);
};

const items = createReducer([], {
  [contactActions.addContact]: addContact,
  [contactActions.removeContact]: removeContact,
});

const filter = createReducer("", {
  [contactActions.changeFilter]: (state, action) => action.payload,
});

// const items = (state=[], {type,payload}) => {
//   switch(type){
// // case actionTypes.ADD:
// case contactActions.addContact.type:
//   return [...state, payload.contact];

//   // case actionTypes.REMOVE:
//   case contactActions.removeContact.type:
//   return state.filter(contact => contact.id !== payload);

//   default:
//     return state;

//   }
// };

// const filter = (state='', {type, payload}) => {
//   switch(type){
//     // case actionTypes.CHANGE_FILTER:
//     case contactActions.changeFilter.type:
//       return payload;

//       default:
//         return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
