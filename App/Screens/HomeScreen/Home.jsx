import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import Colors from '../../Utils/Colors';
import HomeND from './HomeND';
import { AntDesign } from '@expo/vector-icons';
import HomeWD from './HomeWD';

export default function Home() {

  const [data,setData]=useState(false)


  return (
    <View style={{backgroundColor:Colors.BG,height:'100%'}}>
      <Header/>
      <View style={styles.homeContainer}>
        {data === false && (
          <HomeND/>
        )}
        {data === true && (
          <HomeWD/>
        )}
        <TouchableOpacity onPress={()=>setData(!data)}>
          <AntDesign name="pluscircle" size={60} color="#87A6D8" style={{position: 'absolute',right:0, bottom:-80}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    padding:20,
    // height:'100%'
  }
});