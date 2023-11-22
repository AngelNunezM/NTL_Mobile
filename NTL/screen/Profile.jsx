import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default function Profile({navigation}) {
  return (
    <View style={{height:690, justifyContent:'space-between'}}>
      <View>
        <View style={{alignItems:'center', padding:30}}>
          <Text style={styles.viewPhoto}></Text>
          <Text style={{fontSize:22, fontWeight:'bold'}}>Angel de Jesus Nuñez Moreno</Text>
          <Text style={{fontSize:14, color:'gray'}}>192310938@NTLEducation.com</Text>
        </View>
        <View>
          <Text style={{fontSize:14, color:'gray', fontWeight:'bold', padding:15}}>Configuracion de la cuenta</Text>
          <View>
            <Text style={styles.textOptions}>Informacion personal</Text>
            <Text style={styles.textOptions}>Seguridad de la cuenta</Text>
          </View>
          <Text style={{fontSize:14, color:'gray', fontWeight:'bold', padding:15}}>Informacion util</Text>
          <View>
            <Text style={styles.textOptions}>Ayuda</Text>
            <Text style={styles.textOptions}>Colaboradores</Text>
            <Text style={styles.textOptions}>Contribuir</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
        <Text style={styles.textButton}>Cerrar sesion</Text>
      </TouchableOpacity>
      <Text style={{color:'gray', fontWeight:'300', textAlign:'center', }}>NTL Education v1.0</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  viewPhoto:{
    padding:20,
    backgroundColor:'rgb(99 102 241)',
    borderRadius:160,
    width:100,
    height:100,
    marginBottom:7
  },
  textOptions:{
    fontWeight:'400',
    padding:5,
    marginHorizontal:20,
    fontSize:16
  },
  textButton:{
    fontWeight:'bold',
    color:'rgb(99 102 241)',
    fontSize:17,
    textAlign:'center'
    }
})
