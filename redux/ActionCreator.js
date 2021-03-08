import {PermissionsAndroid} from 'react-native';
import {Platform} from 'react-native';
import Contacts from 'react-native-contacts';
import {addContacts} from './Actions';

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
