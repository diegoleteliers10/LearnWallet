import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import Colors from '../../Utils/Colors';
import HomeND from './HomeND';
import { AntDesign } from '@expo/vector-icons';
import HomeWD from './HomeWD';

export default function Home() {

  const [data,setData]=useState(false)
  const [modalVisible, setModalVisible] = useState(false);

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
        <View style={{position:'relative'}}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{position: 'absolute',right:0, bottom:-80}}>
            <AntDesign name="pluscircle" size={60} color={Colors.SECONDARY_TEXT}/>
          </TouchableOpacity>
          <Modal 
            transparent={true}
            animationType="fade"
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
          }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text onPress={() => setModalVisible(!modalVisible)}>Hello, this is my first modal</Text>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    padding:20,
    // height:'100%'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    position:'absolute',
    bottom:130,
    right:40
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});