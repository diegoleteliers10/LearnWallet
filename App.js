import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogHome from './App/Screens/LoginScreen/Login';
import Colors from './App/Utils/Colors'
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from '@react-navigation/native';
import Home from './App/Screens/HomeScreen/Home';
import TabNavigation from './App/Navigation/TabNavigation';
import { useFonts } from 'expo-font';
import LogNavigation from './App/Navigation/LogNavigation';

export default function App() {


  const [fontsLoaded] = useFonts({
    'Outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  return (
    <ClerkProvider publishableKey='pk_test_ZGlyZWN0LXByaW1hdGUtNTMuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LogNavigation/>
        </SignedOut>
        <StatusBar style="dark" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: Colors.BG,
  }
});