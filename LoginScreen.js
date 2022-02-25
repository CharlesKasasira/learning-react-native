import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from './styles/style'

const LoginScreen = ({ navigation }) => {
  return (
    <View style={GLOBAL_STYLES.container}>
      <Text>Login</Text>
       <TouchableOpacity style={GLOBAL_STYLES.button}
        onPress={() => {
          navigation.navigate('Dashboard')
        }} >
          <Text style={GLOBAL_STYLES.btnText}>Login</Text>
        </TouchableOpacity>

    </View>
  )
}

export default LoginScreen