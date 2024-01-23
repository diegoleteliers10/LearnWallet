import { View, Text, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import {LocaleConfig, Calendar} from 'react-native-calendars';
import Colors from '../../Utils/Colors';

LocaleConfig.locales['es'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ],
  monthNamesShort: ['Ene', 'Feb', 'Marz', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Jue', 'Vie', 'Sab'],
  today: "Hoydia"
};
LocaleConfig.defaultLocale = 'es';

export default function Calendary() {
  const [currentDay, setCurrentDay] = useState('');

  useEffect(() => {
    const date = new Date();
    const day = ("0" + date.getDate()).slice(-2); // día del mes
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // mes
    const year = date.getFullYear(); // año

    setCurrentDay(`${year}-${month}-${day}`);
  }, []);

  return (
    <View style={{backgroundColor:Colors.BG, height:'100%'}}>
      <Calendar
        style={{
          backgroundColor: Colors.PRIMARY_TEXT,
          width:'90%',
          left:20,
          paddingVertical:10,
          borderRadius:10,
          marginTop:70
        }} 
        theme={{
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          arrowColor: 'white',
          monthTextColor: 'black',
          textDayFontFamily: 'Outfit',
          textMonthFontFamily: 'Outfit',
          textDayHeaderFontFamily: 'Outfit',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }}
        firstDay={1} 
        enableSwipeMonths={true} 
        markingType='custom' 
        markedDates={{
          [currentDay]: {
            customStyles: {
              container: {
                backgroundColor: '#0097d2'
              },
              text: {
                color: Colors.PRIMARY_TEXT,
                fontWeight: 'bold'
              }
            }
          }
        }} 
        onDayPress={day => {
          console.log('selected day', day);
        }}
      />
      <Text style={{padding:30,marginTop:-10,fontSize:20, fontFamily:'Outfit-Medium', color:Colors.PRIMARY_TEXT, width:'100%', textAlign:'left', top:10,right: 5,}}>Expenses and incomes of the day</Text>
      <View style={styles.subContainer}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    width:'100%',
    height:'70%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    marginTop:-5,
    padding:20,
    backgroundColor:Colors.CARDS,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  }
});