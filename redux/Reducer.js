import {combineReducers} from 'redux';
import {SET_SELECTED_CONTACT, ADD_CONTACTS, SET_LOADING} from './Types';
import update from 'immutability-helper';

const INITIAL_STATE = {
  contacts: [],
  selectedContact: {},
  loading: true,
};

const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SELECTED_CONTACT:
      return update(state, {selectedContact: {$set: action.contact}});
    case ADD_CONTACTS:
      return {
        ...state,
        contacts: action.contacts,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default combineReducers({
  contactsReducer,
});
