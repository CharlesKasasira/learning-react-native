import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../styles/style'


const DashboardScreen = ({navigation}) => {

 


  return (
    <View style={GLOBAL_STYLES.dashboard}>

    {/* first column */}
      <View
        style={{
          flex: 0.3,
          flexDirection: 'row'
        }}
      >
        <View
          style={{
            flex: 0.33,
            borderWidth: 1
          }}
        >
          <TouchableOpacity
            style={[GLOBAL_STYLES.dashboardItem]}
            onPress={() => {
              navigation.navigate('Prayer')
              }}>
            <Text style={[
              GLOBAL_STYLES.dashboardItemText, 
              GLOBAL_STYLES.dashboardFont
            ]}>Prayer Requests</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 0.33,
            borderWidth: 1
          }}
        >
            <TouchableOpacity
                style={[GLOBAL_STYLES.dashboardItem, GLOBAL_STYLES.dashboardItemWhite]}
                onPress={() => navigation.navigate('Testimonies')}>
              <Text style={[
                  GLOBAL_STYLES.dashboardItemText, 
                  GLOBAL_STYLES.dashboardFont
                ]}>Testimonies</Text>
            </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.33,
            borderWidth: 1
          }}
        >
          <TouchableOpacity
              style={[GLOBAL_STYLES.dashboardItem]}
              onPress={() => navigation.navigate('Online Cell')}>
            <Text style={[
                GLOBAL_STYLES.dashboardItemText, 
                GLOBAL_STYLES.dashboardFont
              ]}>Online Cell</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* second column */}
      <View
        style={{
          flex: 0.3,
        }}
      >
          <TouchableOpacity
            style={[GLOBAL_STYLES.dashboardItem]}
            onPress={() => navigation.navigate('Bible Study')}>
          <Text style={[
              GLOBAL_STYLES.dashboardItemText,
              GLOBAL_STYLES.dashboardFont
            ]}>Bible Study</Text>
          </TouchableOpacity>
      </View>

      {/* third column */}
      <View
        style={{
          flex: 0.3,
          flexDirection: 'row'
        }}
      >
        <View
          style={{
            flex: 0.33,
            borderWidth: 1
          }}
        >
            <TouchableOpacity
            style={[GLOBAL_STYLES.dashboardItem]}
            onPress={() => navigation.navigate('Tithe')}>
          <Text style={[
              GLOBAL_STYLES.dashboardItemText, 
              GLOBAL_STYLES.dashboardFont
            ]}>Tithe</Text>
        </TouchableOpacity> 
        </View>
        <View
          style={{
            flex: 0.33,
            borderWidth: 1
          }}
        >
            <TouchableOpacity
                style={[GLOBAL_STYLES.dashboardItem]}
                onPress={() => navigation.navigate('Donate')}>
              <Text style={[
                  GLOBAL_STYLES.dashboardItemText, 
                  GLOBAL_STYLES.dashboardFont
                ]}>Donate</Text>
            </TouchableOpacity> 
        </View>
        <View
          style={{
            flex: 0.33,
            borderWidth: 1
          }}
        >
            <TouchableOpacity
              style={[GLOBAL_STYLES.dashboardItem]}
              onPress={() => navigation.navigate('Donate')}>
            <Text style={[
                GLOBAL_STYLES.dashboardItemText, 
                GLOBAL_STYLES.dashboardFont
              ]}>Donate</Text>
          </TouchableOpacity> 
        </View>
      </View>
    </View>
  )
}

export default DashboardScreen