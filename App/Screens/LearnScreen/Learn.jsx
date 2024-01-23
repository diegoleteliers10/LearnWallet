import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Learn() {
  return (
    <View style={{backgroundColor:Colors.BG, height:'100%'}}>
      <Text style={{fontFamily:'Outfit-Medium', padding:30, fontSize:30, color:Colors.PRIMARY_TEXT, marginTop:20}}>What do you want to learn today?</Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity>
            <View>

            </View>
            <Text>Articles</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>

            </View>
            <Text>Videos</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity>
            <View>

            </View>
            <Text>Glosary</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>

            </View>
            <Text>Books</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}