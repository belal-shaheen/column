import React, {Component, useEffect} from 'react';
import {
  ActivityIndicator,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Avatar, ListItem, Text} from 'react-native-elements';

const Contact = ({
  givenName,
  middleName,
  familyName,
  hasThumbnail,
  thumbnailPath,
  phoneNumbers,
}) => {
  const openDialog = () => {
    if (phoneNumbers.length > 0) {
      Linking.openURL(`tel:${phoneNumbers[0].number}`);
    }
  };

  return (
    <Pressable onPress={openDialog}>
      <Avatar
        width={40}
        height={40}
        source={{
          uri: hasThumbnail ? thumbnailPath : undefined,
        }}
      />
      <Text>
        {givenName} {middleName} {familyName}{' '}
      </Text>
      {phoneNumbers.map((number, index) => (
        <ListItem key={index}>
          <Text>{number.label}</Text>
          <Text>{number.number}</Text>
        </ListItem>
      ))}
    </Pressable>
  );
};

export default Contact;
