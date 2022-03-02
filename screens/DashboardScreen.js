import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../styles/style'


const DashboardScreen = ({navigation}) => {

 


  return (
    <View style={GLOBAL_STYLES.dashboard}>
      <StatusBar barStyle='dark-content'/>
      {/* Prayer Requests */}
      <TouchableOpacity
          style={[GLOBAL_STYLES.dashboardItem, GLOBAL_STYLES.dashboardItemPurple]}
          onPress={() => {
            navigation.navigate('Prayer')
            }}>
        <Text style={[
            GLOBAL_STYLES.dashboardItemText, 
            GLOBAL_STYLES.dashboardFont
          ]}>Prayer Requests</Text>
      </TouchableOpacity>

      {/* Bible Study */}
      <TouchableOpacity
          style={[GLOBAL_STYLES.dashboardItem, GLOBAL_STYLES.dashboardItemOrange]}
          onPress={() => navigation.navigate('Bible Study')}>
        <Text style={[
            GLOBAL_STYLES.dashboardItemText,
            GLOBAL_STYLES.dashboardFont
          ]}>Bible Study</Text>
      </TouchableOpacity>

      {/* Testimonies */}
      <TouchableOpacity
          style={[GLOBAL_STYLES.dashboardItem, GLOBAL_STYLES.dashboardItemWhite]}
          onPress={() => navigation.navigate('Testimonies')}>
        <Text style={[
            GLOBAL_STYLES.dashboardItemText, 
            GLOBAL_STYLES.dashboardFont
          ]}>Testimonies</Text>
      </TouchableOpacity>

      {/* Main Services */}
      <TouchableOpacity
          style={[GLOBAL_STYLES.dashboardItem, GLOBAL_STYLES.dashboardItemGreen]}
          onPress={() => navigation.navigate('Service')}>
        <Text style={[
            GLOBAL_STYLES.dashboardItemText, 
            GLOBAL_STYLES.dashboardFont
          ]}>Main Service</Text>
      </TouchableOpacity>

      {/* Online Cell */}
      <TouchableOpacity
          style={[GLOBAL_STYLES.dashboardItem, GLOBAL_STYLES.dashboardItemPink]}
          onPress={() => navigation.navigate('Online Cell')}>
        <Text style={[
            GLOBAL_STYLES.dashboardItemText, 
            GLOBAL_STYLES.dashboardFont
          ]}>Online Cell</Text>
      </TouchableOpacity>

      {/* Tithe */}
      <TouchableOpacity
          style={[GLOBAL_STYLES.dashboardItem, GLOBAL_STYLES.dashboardItemPurple]}
          onPress={() => navigation.navigate('Tithe')}>
        <Text style={[
            GLOBAL_STYLES.dashboardItemText, 
            GLOBAL_STYLES.dashboardFont
          ]}>Tithe</Text>
      </TouchableOpacity>

      {/* Donate */}
      <TouchableOpacity
          style={[GLOBAL_STYLES.dashboardItem, GLOBAL_STYLES.dashboardItemOrange]}
          onPress={() => navigation.navigate('Donate')}>
        <Text style={[
            GLOBAL_STYLES.dashboardItemText, 
            GLOBAL_STYLES.dashboardFont
          ]}>Donate</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DashboardScreen