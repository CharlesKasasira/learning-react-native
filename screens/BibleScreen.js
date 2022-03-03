import { View, Image, Text, TextInput, TouchableOpacity, FlatList, ScrollView  } from 'react-native'
import React from 'react'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Feather'
import { GLOBAL_STYLES } from '../styles/style'
import DATA from '../helpers/DATA'
import { COLORS } from '../helpers/constants'

const Item = ({ item, playing, setPlaying }) => {
  const { title, date, time, preacher, photo } = item
  return (
    <View style={GLOBAL_STYLES.flatListItem}>
      <Image 
        style={GLOBAL_STYLES.flatlistPhoto}
        source={photo}
      />
      <View style={GLOBAL_STYLES.flatListItemText}>
        <Text style={GLOBAL_STYLES.flatListItemTitle}>{title}</Text>
        <Text style={GLOBAL_STYLES.flatListNormalText}>{date} | {time} | {preacher}</Text>
      </View>
      <View style={GLOBAL_STYLES.flatListItemIcons}>
        {
          playing 
          ? 
            (
              <>
                <TouchableOpacity onPress={() => setPlaying(null)}>
                  <Icon name='stop-circle' size={25} color='red' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPlaying(null)}>
                  <Icon name='pause-circle' size={25} color='red' />
                </TouchableOpacity>
              </>
            )
          :
            (
              <TouchableOpacity onPress={() => setPlaying(true)}>
                <Icon name='play-circle' size={25} color='red' />
              </TouchableOpacity>
            )
        }
      </View>
      
    </View>
  )
}

const Header = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 22, marginLeft: 10, color: 'black'}}>Bible Study</Text>
    </View>
  )
}

const SearchHeader = ({switchHeader}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderBottomColor: 'grey'}}>
      <TouchableOpacity onPress={() => switchHeader(true)}>
        <Icon name='arrow-left' size={25} color='black' />
      </TouchableOpacity>
      <TextInput 
        style={{backgroundColor: '#c9c9c9', width: '90%', margin: 3, borderRadius: 15}}
        placeholder='Search'
      />
      
    </View>
  )
}

const Footer = () => {
  return (
    <View style={GLOBAL_STYLES.flatListFooter}>
      <FAIcon name='microphone' size={20} color={COLORS.WHITE} />
      <FAIcon name='play' size={20} color={COLORS.WHITE} />
      <FAIcon name='paperclip' size={20} color={COLORS.WHITE} />
      <FAIcon name='paper-plane' size={20} color={COLORS.WHITE} />
    </View>
  )
}

const BibleScreen = ({ navigation }) => {
  const [ heading, setHeading ] = React.useState(true)


  navigation.setOptions( {
    headerTitle: () => <Header />, 
    headerLeft: () => <Icon  name='home' size={25} color='black'm/>,
    headerRight: () => (<TouchableOpacity onPress={() => setHeading(false)}>
                          <FAIcon name='search' size={20} color='red' />
                        </TouchableOpacity>),
    headerShown: heading
  })

  

  const [ playing, setPlaying ] = React.useState(true)

  const renderItem = (item) => <Item {...item} />
  return (
    <>
      {!heading && <SearchHeader switchHeader={setHeading} />}
      <View style={{flex: 1}}>
        <View style={GLOBAL_STYLES.flatListContainer}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={GLOBAL_STYLES.flatListItemSeparator}></View>}
          />
        </View>
        <Footer style={GLOBAL_STYLES.flatListFooter} />
      </View>
    </>
  )
}

export default BibleScreen