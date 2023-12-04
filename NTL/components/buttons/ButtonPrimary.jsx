import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function ButtonPrimary({navigation, direction, text, ident = ""}) {
  return (
        <TouchableOpacity
        onPress={() => {{navigation.navigate(direction)}}}
        style={styles.button}>
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button:{
        padding: 15,
        width:'90%',
        marginTop:20,
        backgroundColor:'#101010',
        borderRadius:7
    },
    textButton: {
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold'
    },
    
})
