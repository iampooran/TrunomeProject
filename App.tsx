import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import 'react-native-gesture-handler';
import LoginScreen from './src/Screens/LoginScreen';
import Authenticated from './src/Screens/Authenticated/Authenticated';
import {routes} from './src/utils/constents/routes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name={routes.login} component={LoginScreen} />
        <Stack.Screen name={routes.authenticated} component={Authenticated} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
