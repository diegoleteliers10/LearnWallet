import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function Register({navigation}) {

  const [showPassword, setShowPassword] = useState(false);
  const [createdUser, setCreatedUser] = useState({
    name: '',
    last_name:'',
    email:'',
    password:'',
    password_confirmation:'',
  });

  console.log(createdUser)

  return (
    <View style={styles.loginContainer}>
      <View style={{marginTop:50,backgroundColor:'white', paddingHorizontal:60, paddingVertical:10}}>
        <Text style={{color:'black'}}>Logo</Text>
      </View>
      <Text style={{color:Colors.PRIMARY_TEXT, marginTop:60, width:'100%', fontSize:23}}>Create your account</Text>
      <TextInput placeholder='Name' style={styles.inputText} autoComplete='name' caretHidden inputMode='text' placeholderTextColor={Colors.PRIMARY_TEXT} onChange={
          (e) => setCreatedUser({...createdUser, password:e.nativeEvent.text})
        }/>
      <TextInput placeholder='Last Name' style={styles.inputText} autoComplete='name' caretHidden inputMode='text' placeholderTextColor={Colors.PRIMARY_TEXT} onChange={
          (e) => setCreatedUser({...createdUser, password:e.nativeEvent.text})
        }/>
      <TextInput placeholder='Email' style={styles.inputText} autoComplete='email' caretHidden placeholderTextColor={Colors.PRIMARY_TEXT} inputMode='email' onChange={
          (e) => setCreatedUser({...createdUser, password:e.nativeEvent.text})
        }/>
      <View style={{width:'100%', position:'relative'}}>
        <TextInput placeholder='Password' style={styles.inputText} autoComplete='email' caretHidden maxLength={13} secureTextEntry={showPassword ? false : true} placeholderTextColor={Colors.PRIMARY_TEXT} onChange={
          (e) => setCreatedUser({...createdUser, password:e.nativeEvent.text})
        }/>
        {showPassword ? (
          <Ionicons name="eye-off" size={24} color="white" style={{position:'absolute',right:15,top:37}} onPress={()=>setShowPassword(!showPassword)}/>
        ): (
          <Ionicons name="eye" size={24} color="white" style={{position:'absolute',right:15,top:37}} onPress={()=>setShowPassword(!showPassword)}/>
        )}
      </View>
        <TextInput placeholder='Confirm Password' style={styles.inputText} autoComplete='email' caretHidden maxLength={13} secureTextEntry={showPassword ? false : true} placeholderTextColor={Colors.PRIMARY_TEXT} onChange={
          (e) => setCreatedUser({...createdUser, password:e.nativeEvent.text})
        }/>
      <TouchableOpacity style={{width:'100%',backgroundColor:Colors.SECONDARY, padding:15, borderRadius:9999, marginTop:40}}><Text style={{color:Colors.PRIMARY_TEXT, textAlign:'center',fontSize:20,fontWeight:'900'}}>Sign Up</Text></TouchableOpacity>
      <Text style={{color:Colors.SECONDARY_TEXT, marginTop:60}}>Already have an account? <TouchableOpacity onPress={() => {navigation.navigate('Login'); setShowPassword(false)}}><Text style={{color:Colors.PRIMARY_TEXT, fontWeight:'900',position:'relative',top:4}}>Sign In</Text></TouchableOpacity></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loginContainer:{
    paddingVertical:30, 
    paddingHorizontal:40,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  },
  inputText : {
    width:'100%', 
    backgroundColor:Colors.CARDS, 
    paddingVertical:7, 
    marginTop:30, 
    fontSize:17, 
    paddingHorizontal:20,
    color:Colors.PRIMARY_TEXT,
    borderRadius:7
  },
});