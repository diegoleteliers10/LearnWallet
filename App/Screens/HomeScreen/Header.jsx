import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {

  const { isLoaded, isSignedIn, user } = useUser();
 
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return user&&(
    <View style={{padding:20,paddingTop:40}}>
      <View style={styles.profileMainContainer}>
        <View style={{backgroundColor:colors.PRIMARY_TEXT,paddingVertical:5,paddingHorizontal:20}}>
          <Text>Logo</Text>
        </View>
        <View style={styles.profileContainer}>
          <View>
            <Text style={{color:colors.PRIMARY_TEXT,fontSize:12,fontFamily:'Outfit',textAlign:'right'}}>Welcome</Text>
            <Text style={{color:colors.PRIMARY_TEXT,fontSize:15,fontFamily:'Outfit-Bold',textAlign:'right'}}>{user?.fullName}</Text>
          </View>
          <Image source={{uri:user?.imageUrl}} style={styles.userImage}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  userImage:{
    width: 40,
    height:40,
    borderRadius:99,
  },
  profileContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  profileMainContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  textInput:{
    padding:7,
    paddingHorizontal:16,
    backgroundColor:colors.WHITE,
    borderRadius:8,
    width:'85%',
    textDecorationColor:colors.PRIMARY,
    fontFamily:'Outfit',
  }
});