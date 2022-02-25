import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { GLOBAL_STYLES } from './styles/style'

const DashboardScreen = (props) => {
  const [ text, setText ] = useState('Charles is a Genius')
  return (
    <View style={GLOBAL_STYLES.container}>
      <Text>Dashboard</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Login')}>
            <Text>Logout</Text>
      </TouchableOpacity>

      <Text style={GLOBAL_STYLES.geniusStaff}>{text} is a genius</Text>

      <TextInput
        placeholder='Enter the genius name'
        onChangeText={(typed)=> {
          setText(typed)
        }}
      />

        {/* <Button title='Go to Login'
            onPress={() => props.navigation.push('Login')} /> 
        <Button title='Go Home'
            onPress={() => props.navigation.popToTop()} /> */}
    </View>
  )
}

export default DashboardScreen