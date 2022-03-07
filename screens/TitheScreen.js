import { View, Text, Button, TextInput, Slider } from 'react-native'
import React from 'react'
import Overlay from '../components/shared/Overlay'

const TitheScreen = ({navigation}) => {
  const [ form, setForm ] = React.useState(false)

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text>Title</Text>,
      headerRight: () => <Button onPress={() => setForm(true)} title='Deposit'/>
    })
  }, [])
  return (
    <View style={{flex: 1}}>
      <Text>TitheScreen</Text>

      {form && <Overlay 
        title='Online Tithe Deposit'
        close={() => setForm(false)}
        body={(
          <View>
            <TextInput placeholder='Enter you Name' />
            <TextInput placeholder='Phone Number ' />
            <TextInput placeholder='Year Joined ' />
            <Button 
              title='Deposit'
            />
          </View>
        )}
      />}

      <Text>hey</Text>
      <Slider />
    </View>
  )
}

export default TitheScreen