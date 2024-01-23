import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Initiate({navigation}) {
  return (
        <View style={{alignItems:'center'}}>
          <Image source={require('../../../assets/login.png')} style={styles.loginImage}/>
          <View style={styles.subContainer}>
            <Text style={{fontSize:26, textAlign:'center', color:Colors.PRIMARY_TEXT}}>Welcome to your <Text style={{fontWeight:'900'}}>Personal Finance Tutor and Tracker!</Text></Text>
            <Text style={{fontSize:17, textAlign:'center', color:Colors.SECONDARY_TEXT, marginTop:20, width:250}}> Unlock smart money management and deepen your money skills</Text>
            <TouchableOpacity style={{width:'100%',backgroundColor:Colors.SECONDARY, padding:15, borderRadius:9999, marginTop:40}} onPress={() => navigation.navigate('Login')}><Text style={{color:Colors.PRIMARY_TEXT, textAlign:'center',fontSize:23,fontWeight:'900'}}>Let’s Get Started</Text></TouchableOpacity>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  loginImage:{
    width:400,
    height:400,
    marginTop:60,
    borderWidth:4,
    borderRadius:20,
    objectFit:'contain'
  },
  subContainer: {
    width:'100%',
    height:'70%',
    borderTopLeftRadius:60,
    borderTopRightRadius:60,
    marginTop:25,
    padding:20,
    backgroundColor:Colors.CARDS,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  }
});