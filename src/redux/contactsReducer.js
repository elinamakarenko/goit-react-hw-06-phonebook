import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterContacts, contactsItems } from './contacts-actions';

const filter = createReducer('', {
  [filterContacts]: (state, action) => action.payload,
});
const items = createReducer([], {
  [contactsItems]: (state, action) => state,
});
export default combineReducers({
  items,
  filter,
});
