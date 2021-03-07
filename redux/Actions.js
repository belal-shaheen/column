import {Platform} from 'react-native';
import Contacts from 'react-native-contacts';
import {SET_SELECTED_CONTACT, ADD_CONTACTS, SET_LOADING} from './Types';
import {PermissionsAndroid} from 'react-native';
import {forEach} from 'lodash';

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

const requestContactPermissions = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Contacts',
        message: 'For this app to work, it needs to view your contacts.',
        buttonPositive: 'OK',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Contacts permission granted');
      return true;
    } else {
      console.log('Contacts permission not granted');
      return false;
    }
  } catch (e) {
    console.warn(e);
    return false;
  }
};

export const getContacts = () => {
  return async (dispatch, getState) => {
    const permission =
      Platform.OS === 'ios' ? true : await requestContactPermissions();

    if (permission) {
      let contacts = null;
      try {
        contacts = await Contacts.getAll();
      } catch (e) {
        console.warn(e);
      }
      dispatch(addContacts(contacts));
    } else {
      console.warn('Premission Error');
    }
  };
};
