import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import LinkName from '../links/LinkName'
import useAuth from '../../hooks/useAuth'

export default function CardWelcome({navigation}) {
  const {name} = useAuth();
  return (
    <View style={styles.containerWelcome}>
        <Text style={styles.textBody}>Hola</Text>
        <Text style={{fontWeight:'700', color:'rgb(99 102 241)'}}>{name} </Text>
        <Text style={styles.textBody}>Bienvenid@</Text>
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