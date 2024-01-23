import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/LoginScreen/Login';
import Initiate from '../Screens/LoginScreen/Initiate';
import Register from '../Screens/LoginScreen/Register';
import Colors from '../Utils/Colors';

const Stack = createNativeStackNavigator();

const MyTheme = {
  colors: {
    background: Colors.BG,
  },
};

export default function LogNavigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Initiate">
        <Stack.Screen name="Initiate" component={Initiate} options={{
          backgroundColor: Colors.BG
        }}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}