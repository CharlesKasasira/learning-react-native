import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from './styles/style'

const DashboardScreen = (props) => {
  return (
    <View style={GLOBAL_STYLES.container}>
      <Text>Dashboard</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Login')}>
            <Text>Logout</Text>
        </TouchableOpacity>

        {/* <Button title='Go to Login'
            onPress={() => props.navigation.push('Login')} /> 
        <Button title='Go Home'
            onPress={() => props.navigation.popToTop()} /> */}
    </View>
  )
}

export default DashboardScreen