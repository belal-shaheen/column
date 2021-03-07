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

const EmptyContacts = () => {
  return (
    <View>
      <Text>You don't have any contacts :(</Text>
    </View>
  );
};

export default EmptyContacts;
