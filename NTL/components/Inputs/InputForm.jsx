import React, { useState } from 'react'
import { TextInput, Text, View, StyleSheet } from 'react-native'

export default function InputForm({text, place}) {

  const [param, setParam] = useState();
  
  return (
        <View style={styles.textContainer}>
            <Text style={styles.text1}>{text}</Text>
            <TextInput 
            style={styles.inputText}
            placeholder={place}
            />
        </View>
  )
}
const styles = StyleSheet.create({
    text1:{
        fontWeight:'300',
        marginTop:10,
        textAlign:'left'
      },
      inputText:{
        padding:10,
        paddingHorizontal:15,
        backgroundColor:'#fff',
        borderWidth: 1,
        borderRadius:7,
        width:'100%',
        marginTop:5,
      },
      textContainer: {
        alignItems: 'flex-start', 
        width: '90%', 
        marginTop:5
      },
});
