import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'

export default function Home() {
  return (
    <View>
      <Header/>
      <View style={styles.homeContainer}>
        <Text>Home</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    padding:20
  }
});