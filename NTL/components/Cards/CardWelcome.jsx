import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import LinkName from '../links/LinkName'

export default function CardWelcome({navigation}) {
  return (
    <View style={styles.containerWelcome}>
        <Text style={styles.textBody}>Hola</Text>
        <Text>Angel de Jesus Nuñez Moreno</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textBody:{
        textAlign:'center',
        fontWeight:'300'
    },
    containerWelcome:{
        padding:5,
        marginHorizontal:20,
        marginVertical:20,
        borderRadius:8,
        borderWidth:1,
        borderStyle:'dashed',
        flexDirection:'row',
        gap:5,
        width:350,
        justifyContent:'center'
    }
})