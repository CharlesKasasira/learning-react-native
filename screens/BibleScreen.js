import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Feather'

const BibleScreen = () => {
  return (
    <View>
      <Text>BibleScreen</Text>
      <TouchableOpacity>
        <FAIcon name='search' size={20} color='red' />
      </TouchableOpacity>
      <TouchableOpacity>
        <FAIcon name='microphone' size={20} color='red' />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name='pause-circle' size={20} color='red' />
      </TouchableOpacity>
      
    </View>
  )
}

export default BibleScreen