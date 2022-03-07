import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { OVERLAY_STYLES } from '../../styles/style'

const Overlay = ({title, close, body}) => {
  return (
    <View style={OVERLAY_STYLES.container}>
        <View style={OVERLAY_STYLES.contentWrapper}>
            <View style={OVERLAY_STYLES.overlayHeader}>
                <TouchableOpacity onPress={() => close()}>
                    <Icon name='x' size={25} color='#000' />
                </TouchableOpacity>
                <Text>{title}</Text>
            </View>
            {body}
        </View>
    </View>
  )
}

export default Overlay