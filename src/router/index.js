import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {StatusBar} from 'react-native';

// import HomeTabs from '#/router/home';
import Login from '#/views/Login';
import Home from '#/views/Home';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {backgroundColor: '#2444a4'},
          headerTintColor: 'white',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Entrar '}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
