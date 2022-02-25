import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { GLOBAL_STYLES } from '../styles/style'

const DashboardScreen = ({navigation}) => {
  const [ text, setText ] = useState('Charles is a Genius')
  return (
    <View style={GLOBAL_STYLES.container}>
      <TouchableOpacity 
          onPress={() => navigation.navigate('Prayer')}>
        <Text>Prayer Requests</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DashboardScreen