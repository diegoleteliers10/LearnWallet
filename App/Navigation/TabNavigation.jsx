import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../Screens/HomeScreen/Home'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import { useUser } from '@clerk/clerk-expo';
import Initiate from '../Screens/LoginScreen/Initiate';
import Login from '../Screens/LoginScreen/Login';
import Register from '../Screens/LoginScreen/Register';

const Tab = createBottomTabNavigator()

export default function TabNavigation() {


  const { isLoaded, isSignedIn, user } = useUser();
 
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <Tab.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor:Colors.SECONDARY_TEXT, tabBarStyle:{backgroundColor:Colors.BG,height:60,borderColor:Colors.CARDS}}} initialRouteName="Home">
        <Tab.Screen name='Home' component={Home} options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color, fontSize:15,bottom:5}}>Home</Text>
          ),
          tabBarIcon:({color, size})=>(
            <FontAwesome name="home" size={30} color={color}/>
          ),
        }}/>
        {/* <Tab.Screen name='booking' component={BookingScreen} options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color, fontSize:12,marginTop:-7}}>Booking</Text>
          ),
          tabBarIcon:({color, size})=>(
            <FontAwesome name="book" size={size} color={color} />
          )
        }}/>
        <Tab.Screen name='profile' component={ProfileScreen} title={null} options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color, fontSize:12,marginTop:-7}}>Profile</Text>
          ),
          tabBarIcon:({color, size})=>(
            <FontAwesome name="user-circle" size={size} color={color} />
          )
        }}/> */}
    </Tab.Navigator>
  )
}