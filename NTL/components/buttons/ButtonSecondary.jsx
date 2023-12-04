import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ButtonSecondary({navigation, direction, text}) {
  return (
        <TouchableOpacity
        onPress={() => {navigation.navigate(direction)}}
        style={styles.button1}>
            <Text style={styles.textButton1}>{text}</Text>
        </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button1:{
        padding: 15,
        width:'90%',
        marginTop:20,
        backgroundColor: 'white',
        borderRadius:7,
        borderWidth: 2,
        borderColor:'#000',
    },
    textButton1: { 
        color:'#000',
        textAlign:'center',
        fontWeight:'bold'
    },
});
