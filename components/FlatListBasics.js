import { Text, FlatList } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../styles/style'

const FlatListBasics = () => {
  return (
      <FlatList
        data={[
            {
                firstName: 'Charles',
                languages: 'JavaScript, Python'
            },
            {
                firstName: 'Bridget',
                languages: 'C, C++'
            },
            {
                firstName: 'ThisGoogler',
                languages: 'Dart, Go'
            }
        ]}

        renderItem={(programmers) => <Text style={GLOBAL_STYLES.contacts}>{programmers.item.firstName}: {programmers.item.languages}</Text>}
       />
  )
}

export default FlatListBasics