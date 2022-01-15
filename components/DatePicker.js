
import React, { useState } from 'react'
import { View, Button,TouchableOpacity,Text,StyleSheet } from 'react-native'
import DatePicker from 'react-native-neat-date-picker'

const MyDatePicker = (props) => {

  const [showDatePicker, setShowDatePicker] = useState(false)

  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
  }

  const onConfirm = ( date ) => {
    // You should close the modal in here
    setShowDatePicker(false)
    
    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(date)
   console.log(props.myDate)
  }

  return (
    <View>
      <TouchableOpacity style={styles.submitButton} onPress={openDatePicker} >
      <Text style={styles.submitButtonText}>
      select date
      </Text>
      </TouchableOpacity>
      <DatePicker
        isVisible={showDatePicker}
        mode={'single'}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </View>
)}

export default MyDatePicker
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  displayText: { fontSize: 15, textDecorationLine: 'underline' },
  inputView: { flexDirection: 'row', margin: 20 },
  
  scanButton: {
    backgroundColor: '#66BB6A',
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0,
  },
  buttonText: { fontSize: 20 },
  submitButton: { backgroundColor: '#FBC02D', width: 120, height: 50 },
  submitButtonText: {
    padding: 5,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
