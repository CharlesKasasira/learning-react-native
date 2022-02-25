import { View, Text, TouchableOpacity, TextInput, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import { GLOBAL_STYLES } from '../styles/style'

const DashboardScreen = (props) => {
  const [ text, setText ] = useState('Charles is a Genius')
  return (
    <View style={GLOBAL_STYLES.container}>
      {/* <View style={GLOBAL_STYLES.card}>
        <Text>Prayer Request</Text>
      </View>
      <View style={GLOBAL_STYLES.card}>
        <Text>Prayer Request</Text>
      </View>
      <View style={GLOBAL_STYLES.card}>
        <Text>Prayer Request</Text> 
      </View>
      <View style={GLOBAL_STYLES.card}>
        <Text>Prayer Request</Text>
      </View> */}

      <FlatList 
        style={GLOBAL_STYLES.flat}
        data={[
          {name: 'One'},
          {name: 'Two'},
          {name: 'There'},
          {name: 'There'},
          {name: 'There'},
          {name: 'There'},
          {name: 'There'}
        ]}

        renderItem={({item}) => <View style={GLOBAL_STYLES.card}><Text>{item.name}</Text></View>}
      />

      <Text>Dashboard</Text>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('Login')}>
            <Text>Logout</Text>
      </TouchableOpacity>
      <Button title='Contact list'
        onPress={() => props.navigation.navigate('Contact')} />
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