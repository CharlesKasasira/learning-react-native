/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './LoginScreen'
import DashboardScreen from './DashboardScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const App = () => {

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Dashboard' component={DashboardScreen} options={{title: 'DASHBOARD'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App