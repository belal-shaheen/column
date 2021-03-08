import {SET_SELECTED_CONTACT, ADD_CONTACTS, SET_LOADING} from './Types';

export const addContacts = (contacts) => ({
  type: ADD_CONTACTS,
  contacts,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setSelectedContact = (contact) => ({
  type: SET_SELECTED_CONTACT,
  contact,
});
