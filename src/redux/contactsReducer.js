import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  filterContacts,
  addContacts,
  deleteContacts,
} from './contacts-actions';
const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});
const contactsReducer = createReducer(contacts, {
  [addContacts]: (state, { payload }) => [...state, payload],
  [deleteContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default combineReducers({
  contactsReducer,
  filter,
});
