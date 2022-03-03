/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './screens/LoginScreen'
import DashboardScreen from './screens/DashboardScreen'
import ServiceScreen from './screens/ServiceScreen'
import PrayerRequestScreen from './screens/PrayerRequestScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Testimonies from './screens/Testimonies'
import DonateScreen from './screens/DonateScreen'
import CellScreen from './screens/CellScreen'
import TitheScreen from './screens/TitheScreen'
import BibleScreen from './screens/BibleScreen'

const App = () => {

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator /* initialRouteName="Login" */ >
        <Stack.Screen name='Bible Study' component={BibleScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Dashboard' component={DashboardScreen} options={{headerShown: false}} />
        <Stack.Screen name='Prayer' component={PrayerRequestScreen} />
        <Stack.Screen name='Service' component={ServiceScreen} />
        <Stack.Screen name='Testimonies' component={Testimonies} />
        <Stack.Screen name='Donate' component={DonateScreen} />
        <Stack.Screen name='Online Cell' component={CellScreen} />
        <Stack.Screen name='Tithe' component={TitheScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App