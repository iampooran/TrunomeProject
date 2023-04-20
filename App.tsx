import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import 'react-native-gesture-handler';
import LoginScreen from './src/Screens/LoginScreen';
import Authenticated from './src/Screens/Authenticated/Authenticated';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Authenticated" component={Authenticated} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
