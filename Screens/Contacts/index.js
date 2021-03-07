import React, {Component} from 'react';
import {
  ActivityIndicator,
  Linking,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Avatar, ListItem, Text} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {Contact, EmptyContacts} from '../../Components';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {phoneOverlay: false, selectedNumber: null};
  }

  renderContact = (contact) => {
    return (
      <Contact
        givenName={contact.item.givenName}
        middleName={contact.item.middleName}
        familyName={contact.item.familyName}
        hasThumbnail={contact.item.hasThumbnail}
        thumbnailPath={contact.item.thumbnailPath}
        phoneNumbers={contact.item.phoneNumbers}
      />
    );
  };

  render() {
    return (
      <View>
        {this.props.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={this.props.contacts}
            renderItem={this.renderContact}
            ListEmptyComponent={EmptyContacts}
            keyExtractor={(contact) => contact.recordID}
          />
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contactsReducer.contacts,
    selectedContact: state.contactsReducer.selectedContact,
    loading: state.contactsReducer.loading,
  };
}

export default connect(mapStateToProps, {})(Contacts);
