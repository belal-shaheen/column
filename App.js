import React from 'react';

import {ThemeProvider} from 'react-native-elements';

import {Provider} from 'react-redux';
import Store from './redux/Store';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Contacts} from './Screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Contacts" component={Contacts} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
