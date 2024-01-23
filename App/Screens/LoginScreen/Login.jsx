import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native'
import React, {useState} from 'react'
import Colors from '../../Utils/Colors'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {

  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({strategy:'oauth_google'});
  const { startOAuthFlow: startOAuthFlowFacebook } = useOAuth({strategy:'oauth_facebook'});
  const { startOAuthFlow: startOAuthFlowApple } = useOAuth({strategy:'oauth_apple'});
 
  const onLogin = React.useCallback(async (strategy) => {
    try {
      let result;
      switch (strategy) {
        case 'google':
          result = await startOAuthFlow();
          break;
        case 'facebook':
          result = await startOAuthFlowFacebook();
          break;
        case 'apple':
          result = await startOAuthFlowApple();
          break;
        default:
          throw new Error(`Invalid strategy: ${strategy}`);
      }

      const { createdSessionId, signIn, signUp, setActive } = result;

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, [startOAuthFlow, startOAuthFlowFacebook, startOAuthFlowApple]);

  const [currentScreen, setCurrentScreen] = useState('Initiate');
  const [showPassword, setShowPassword] = useState(false);
  const [createdUser, setCreatedUser] = useState({
    name: '',
    last_name:'',
    email:'',
    password:'',
    password_confirmation:'',
  });
    const [logedUser, setLogedUser] = useState({
    email:'',
    password:'',
  });

  const navigateTo = (screenName) => {
    setCurrentScreen(screenName);
  };

  return (
    <View>

      {/* initiate */}
      {currentScreen === 'Initiate' && (
        <View style={{alignItems:'center'}}>
          <Image source={require('../../../assets/login.png')} style={styles.loginImage}/>
          <View style={styles.subContainer}>
            <Text style={{fontSize:26, textAlign:'center', color:Colors.PRIMARY_TEXT}}>Welcome to your <Text style={{fontWeight:'900'}}>Personal Finance Tutor and Tracker!</Text></Text>
            <Text style={{fontSize:17, textAlign:'center', color:Colors.SECONDARY_TEXT, marginTop:20, width:250}}> Unlock smart money management and deepen your money skills</Text>
            <TouchableOpacity style={{width:'100%',backgroundColor:Colors.CARDS, padding:15, borderRadius:9999, marginTop:40}} onPress={() => navigateTo('Login')}><Text style={{color:Colors.PRIMARY_TEXT, textAlign:'center',fontSize:23,fontWeight:'900'}}>Let’s Get Started</Text></TouchableOpacity>
          </View>
        </View>
      )}

      {/* login */}
      {currentScreen === 'Login' && (
        <View style={styles.loginContainer}>
          <View style={{marginTop:50,backgroundColor:'white', paddingHorizontal:60, paddingVertical:10}}>
            <Text style={{color:'black'}}>Logo</Text>
          </View>
          <Text style={{color:Colors.PRIMARY_TEXT, marginTop:60, width:'100%', fontSize:23}}>Login to your account</Text>
          <TextInput placeholder='Email' style={styles.inputText} autoComplete='email' caretHidden inputMode='email' placeholderTextColor={Colors.PRIMARY_TEXT} onChange={
            (e) => setLogedUser({...logedUser, email:e.nativeEvent.text})
          }/>
          <View style={{width:'100%', position:'relative'}}>
            <TextInput placeholder='Password' style={styles.inputText} autoComplete='email' caretHidden maxLength={13} secureTextEntry={showPassword ? false : true} placeholderTextColor={Colors.PRIMARY_TEXT} onChange={
              (e) => setLogedUser({...logedUser, password:e.nativeEvent.text})
            }/>
            {showPassword ? (
              <Ionicons name="eye-off" size={24} color="white" style={{position:'absolute',right:15,top:37}} onPress={()=>setShowPassword(!showPassword)}/>
            ): (
              <Ionicons name="eye" size={24} color="white" style={{position:'absolute',right:15,top:37}} onPress={()=>setShowPassword(!showPassword)}/>
            )}
          </View>
          <TouchableOpacity style={{width:'100%',backgroundColor:Colors.SECONDARY, padding:15, borderRadius:9999, marginTop:40}}><Text style={{color:Colors.PRIMARY_TEXT, textAlign:'center',fontSize:20,fontWeight:'900'}}>Sign In</Text></TouchableOpacity>
          <View style={styles.line} />
          <Text style={{color:Colors.SECONDARY_TEXT,padding:10,backgroundColor:Colors.BG, marginTop:-21}}>Or sign in with</Text>
          <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 50 }}>
            <TouchableOpacity style={styles.logoContainer} onPress={() => onLogin('facebook')}>
              <FontAwesome name="facebook" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoContainer} onPress={() => onLogin('google')}>
              <FontAwesome name="google" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoContainer} onPress={() => onLogin('apple')}>
              <FontAwesome name="apple" size={40} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={{color:Colors.SECONDARY_TEXT, marginTop:60}}>Don't have an account? <TouchableOpacity onPress={() => {navigateTo('Register'); setShowPassword(false)}}><Text style={{color:Colors.PRIMARY_TEXT, fontWeight:'900',position:'relative',top:4}}>Sign Up</Text></TouchableOpacity></Text>
        </View>
      )}
      {currentScreen === 'Register' && (
        <View style={styles.loginContainer}>
          <View style={{marginTop:50,backgroundColor:'white', paddingHorizontal:60, paddingVertical:10}}>
            <Text style={{color:'black'}}>Logo</Text>
          </View>
          <Text style={{color:Colors.PRIMARY_TEXT, marginTop:60, width:'100%', fontSize:23}}>Create your account</Text>
          <TextInput placeholder='Name' style={styles.inputText} autoComplete='name' caretHidden inputMode='text' placeholderTextColor={Colors.PRIMARY_TEXT}/>
          <TextInput placeholder='Last Name' style={styles.inputText} autoComplete='name' caretHidden inputMode='text' placeholderTextColor={Colors.PRIMARY_TEXT}/>
          <TextInput placeholder='Email' style={styles.inputText} autoComplete='email' caretHidden placeholderTextColor={Colors.PRIMARY_TEXT} inputMode='email'/>
          <View style={{width:'100%', position:'relative'}}>
            <TextInput placeholder='Password' style={styles.inputText} autoComplete='email' caretHidden maxLength={13} secureTextEntry={showPassword ? false : true} placeholderTextColor={Colors.PRIMARY_TEXT}/>
            {showPassword ? (
              <Ionicons name="eye-off" size={24} color="white" style={{position:'absolute',right:15,top:37}} onPress={()=>setShowPassword(!showPassword)}/>
            ): (
              <Ionicons name="eye" size={24} color="white" style={{position:'absolute',right:15,top:37}} onPress={()=>setShowPassword(!showPassword)}/>
            )}
          </View>
            <TextInput placeholder='Confirm Password' style={styles.inputText} autoComplete='email' caretHidden maxLength={13} secureTextEntry={showPassword ? false : true} placeholderTextColor={Colors.PRIMARY_TEXT}/>
          <TouchableOpacity style={{width:'100%',backgroundColor:Colors.SECONDARY, padding:15, borderRadius:9999, marginTop:40}}><Text style={{color:Colors.PRIMARY_TEXT, textAlign:'center',fontSize:20,fontWeight:'900'}}>Sign Up</Text></TouchableOpacity>
          <Text style={{color:Colors.SECONDARY_TEXT, marginTop:60}}>Already have an account? <TouchableOpacity onPress={() => {navigateTo('Login'); setShowPassword(false)}}><Text style={{color:Colors.PRIMARY_TEXT, fontWeight:'900',position:'relative',top:4}}>Sign In</Text></TouchableOpacity></Text>
        </View>
      )}
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
  line: {
    marginTop:60,
    borderBottomColor: Colors.PRIMARY_TEXT,
    borderBottomWidth: 1,
    width: '100%',
  },
  logoContainer: {
    backgroundColor:Colors.CARDS,
    width:70,
    height:70,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
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
    backgroundColor:Colors.SECONDARY,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  }
})