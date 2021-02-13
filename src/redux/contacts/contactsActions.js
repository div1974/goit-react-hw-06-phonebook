import { createAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
// import actionTypes from './contactsActionsTypes'

const addContact = createAction("contact/add", ({ name, number }) => ({
  payload: {
    contact: {
      id: v4(),
      name,
      number,
    },
  },
}));
const removeContact = createAction("tasks/remove");
const changeFilter = createAction("tasks/changeFilter");

// const addContact = ({name, number}) => ({

//     type:actionTypes.ADD,
//     payload: {
//     contact: {
//       id: v4(),
//       name,
//       number,
//       // completed: false,
//     },
//   },
// });

// const removeContact = contactId => ({

//     type:actionTypes.REMOVE,
//     payload: {
//     contactId,
//   },
// });

// const changeFilter = filter => ({

//     type: actionTypes.CHANGE_FILTER,
//     payload: {
//     filter,
//   },
// });

export default {
  addContact,
  removeContact,
  changeFilter,
};
