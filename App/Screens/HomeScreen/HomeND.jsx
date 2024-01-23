import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function HomeND() {
  return (
    <View style={{marginTop:40}}>
      <Text style={{color:Colors.PRIMARY_TEXT, textAlign:'center', fontSize:15, marginTop:90}}>Theres no expenses or incomes yet... Start adding one</Text>
      <Image source={require('../../../assets/ArrowWhite.png')} style={{width:350, height:350, transform: [{ rotate: '60deg' }], right:40, marginTop:20 }} resizeMode='contain' />
    </View>
  )
}