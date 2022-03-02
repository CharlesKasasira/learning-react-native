import { Text, TextInput, SafeAreaView, Button, ActivityIndicator, View, Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { GLOBAL_STYLES } from '../styles/style'

const PRAYER_REQUEST_SCHEMA = yup.object().shape({
  name: yup.string()
          .min(3, 'Enter valid name')
          .required('Name is a must'),
  address: yup.string()
            .min(3, 'Enter valid Adddress')
            .required('Address is a must'),
  phone: yup.string()
          .min(3, 'enter a valid phone no.')
          .required('Phone is a must'),
  request: yup.string()
            .min(5, 'Enter a valid prayer request')
            .required('Enter Prayer Request')

})

const PrayerRequestScreen = ({navigation}) => {
  const [ submitting, setSubmitting ] = useState(false)
  const [ submitted, setSubmitted ] = useState(false)

  if(submitting) return (
    <View style={[GLOBAL_STYLES.container, GLOBAL_STYLES.activityContainer]}>
      <ActivityIndicator 
        size={'large'} color='#fff'
      />
    </View>
  )


    

  if(submitted) return (
    <View style={[GLOBAL_STYLES.container, GLOBAL_STYLES.activityContainer]}>
      <Text style={{color: 'white', fontSize: 20, textAlign: 'center', marginBottom: 10}}>Your prayer request was submitted successfully</Text>
      <Button 
        title='GO BACK'
        onPress={() => {
          setSubmitted(false)
          navigation.setOptions({headerShown: true})
        }}
      />
    </View>
  )



  return (
    <Formik
      
      initialValues={{name: '', request: '', phone: '', address: ''}}
      validateOnMount={true}
      onSubmit={(values, {resetForm}) => {
        resetForm()

        setSubmitting(true)
        setTimeout(() => {
          setSubmitting(false)
          setSubmitted(true)
        }, 2000)

        navigation.setOptions({headerShown: false})
      }}
      validationSchema={PRAYER_REQUEST_SCHEMA}
    >
      {({handleChange, handleBlur, handleSubmit, values, touched, errors, isValid}) => (
        <SafeAreaView style={{paddingLeft: 10, paddingRight: 10}}>
          <TextInput
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            placeholder='Enter name'
            style={GLOBAL_STYLES.inputField}
          />
          {(errors.name && touched.name) && <Text style={GLOBAL_STYLES.feedback}>{errors.name}</Text>}

          <TextInput
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
            placeholder='Enter phone'
            style={GLOBAL_STYLES.inputField}
          />
          {(errors.phone && touched.phone) && <Text style={GLOBAL_STYLES.feedback}>{errors.phone}</Text>}

          <TextInput
            onChangeText={handleChange('address')}
            onBlur={handleBlur('address')}
            value={values.address}
            placeholder='Enter your address'
            style={GLOBAL_STYLES.inputField}

          />
          {(errors.address && touched.address) && <Text style={GLOBAL_STYLES.feedback}>{errors.address}</Text>}

          <TextInput
            onChangeText={handleChange('request')}
            onBlur={handleBlur('request')}
            value={values.request}
            placeholder='Enter your prayer request'
            style={GLOBAL_STYLES.inputField}

          />
          {(errors.request && touched.request) && <Text style={GLOBAL_STYLES.feedback}>{errors.request}</Text>}

          <TextInput
            keyboardType='phone-pad'
          />


          <Button
            round
            title='submit'
            onPress={handleSubmit}
            disabled={!isValid}
            style={{'width': 30}}
            color='purple'
          />

          <Button
            title='Alert'
            onPress={() => {
              return (
                Alert.alert(
                  'About Charles',
                  'Charles is an Euthasist Computer Science Student. Developing is my craft, designing is my recreational and learning is my always', [
                    {
                      text: 'Contact him',
                      // onPress: () => console.warn('Call Charles')
                    },
                    {
                      text: 'Cancel',
                      // onPress: () => console.log('ok')
                    }
                  ]
                )
              )
            }}
          />

        </SafeAreaView>
      )}
    </Formik>
  )
}

export default PrayerRequestScreen