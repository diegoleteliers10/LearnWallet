import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../Screens/HomeScreen/Home'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import { useUser } from '@clerk/clerk-expo';
import { FontAwesome5 } from '@expo/vector-icons';
import Learn from '../Screens/LearnScreen/Learn';
import Calendary from '../Screens/CalendarScreen/Calendary';
import Tools from '../Screens/ToolsScreen/Tools';

const Tab = createBottomTabNavigator()

export default function TabNavigation() {


  const { isLoaded, isSignedIn, user } = useUser();
 
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <Tab.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor:Colors.SECONDARY_TEXT, tabBarInactiveTintColor:Colors.PRIMARY_TEXT, tabBarStyle:{backgroundColor:Colors.BG,height:60,borderColor:Colors.CARDS}}} initialRouteName="Home">
        <Tab.Screen name='Home' component={Home} options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color, fontSize:12,bottom:3}}>Home</Text>
          ),
          tabBarIcon:({color})=>(
            <FontAwesome name="home" size={28} color={color}/>
          ),
        }}/>
        <Tab.Screen name='Learn' component={Learn} options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color, fontSize:12,bottom:3}}>Learn</Text>
          ),
          tabBarIcon:({color})=>(
            <FontAwesome name="book" size={28} color={color} />
          )
        }}/>
        <Tab.Screen name='Calendar' component={Calendary} title={null} options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color, fontSize:12,bottom:3}}>Calendar</Text>
          ),
          tabBarIcon:({color})=>(
            <FontAwesome name="calendar" size={28} color={color} />
          )
        }}/>
        <Tab.Screen name='Tools' component={Tools} title={null} options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color, fontSize:12,bottom:3}}>Calendar</Text>
          ),
          tabBarIcon:({color})=>(
            <FontAwesome5 name="tools" size={28} color={color} />
          )
        }}/>
    </Tab.Navigator>
  )
}